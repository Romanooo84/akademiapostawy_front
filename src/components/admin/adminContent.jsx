import { useState, useEffect } from "react";
import AddContent from "./addingContent";
import DownloadedContents from "./downloadedContents";
import TextEditor from "./textEditor"; // <- Twój TipTap edytor
import link from "../../link";
import css from "./adminContent.module.css";

const AdminContent = ({ data, dataType, startAddContent, setStartAddContent }) => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [entries, setEntries] = useState(data);
  const [pendingImages, setPendingImages] = useState([]);

  // nowy stan do edycji
  const [editingItem, setEditingItem] = useState(null);
  const [editorContent, setEditorContent] = useState("");

  const onClick = async (e) => {
    const { title } = e.target.dataset;
    try {
      const res = await fetch(`${link}${dataType}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!res.ok) throw new Error("Błąd podczas usuwania");

      const result = await res.json();
      setEntries(entries.filter((item) => item.title !== title));
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    setEntries(data);
  }, [data]);

  const addContent = () => {
    setStartAddContent(!startAddContent);
  };

  // --- obsługa edycji ---
  const onEdit = (item) => {
    setEditingItem(item);
    setEditorContent(item.content); // startowa zawartość w TipTap
    setPendingImages([]); // czyścimy poprzednie pending images
  };

  const saveEdit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", editingItem.title);
      formData.append("author", editingItem.author || "");
      formData.append("content", editorContent);
      formData.append("dataType", dataType);

      // główne zdjęcie
      if (editingItem.file) {
        formData.append("image", editingItem.file);
      }

      // obrazki z edytora
      if (pendingImages && pendingImages.length > 0) {
        pendingImages.forEach((img) => {
          formData.append("editorImages", img.file);
        });
      }

      const res = await fetch(`${link}${dataType}`, {
        method: "PUT",
        body: formData, // Multer ustawi boundary
      });

      if (!res.ok) throw new Error("Błąd podczas edycji");
      const updated = await res.json();

      setEditingItem(null);
      setPendingImages([]); // czyszczenie po zapisie
      setEntries((prev) =>
        prev.map((item) => (item.title === updated.title ? updated : item))
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button className={css.button} onClick={addContent}>
        {startAddContent ? "Anuluj" : "Dodaj"}
      </button>

      {startAddContent && (
        <AddContent
          handleFileChange={handleFileChange}
          preview={preview}
          dataType={dataType}
        />
      )}

      {/* Edytor otwierany po kliknięciu */}
      {editingItem && (
        <div style={{ border: "2px solid #888", padding: 20, marginBottom: 20 }}>
          <h3>Edytujesz: {editingItem.title}</h3>
          <TextEditor
            value={editorContent}
            onChange={setEditorContent}
            addPendingImage={(file, localUrl) =>
              setPendingImages((prev) => [...prev, { file, localUrl }])
            }
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setEditingItem({
                ...editingItem,
                file: e.target.files[0],
              })
            }
            style={{ marginTop: 10 }}
          />
          <button className={css.button} onClick={saveEdit} style={{ marginTop: 10 }}>
            Zapisz
          </button>
          <button
            className={css.button}
            onClick={() => setEditingItem(null)}
            style={{ marginTop: 10, marginLeft: 5 }}
          >
            Anuluj
          </button>
        </div>
      )}

      {/* Lista wpisów */}
      <DownloadedContents entries={entries} onClick={onClick} onEdit={onEdit} />
    </div>
  );
};

export default AdminContent;
