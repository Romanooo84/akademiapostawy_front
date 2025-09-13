import link from '../../link';
import { useState } from 'react';
import TextEditor from './textEditor';
import css from './addingContent.module.css';


const AddContent = ({ preview, handleFileChange, dataType }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [pendingImages, setPendingImages] = useState([]); // 🔥 lista oczekujących obrazków
  const [successMessage, setSuccessMessage] = useState('');
  const [editorContent, setEditorContent] = useState('');

  const addPendingImage = (file, localUrl) => {
    setPendingImages((prev) => [...prev, { file, localUrl }]);
  };

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    handleFileChange(e);
  };

  const onClick = async () => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('text', text);
    formData.append('dataType', dataType);

    if (file) formData.append('image', file);

    // 🔥 dorzucamy wszystkie obrazki z edytora
    pendingImages.forEach((img) => {
      formData.append('editorImages', img.file); // klucz `editorImages` jako tablica
    });

    const res = await fetch(`${link}${dataType}`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) throw new Error('Błąd podczas zapisu');

    const result = await res.json();
    console.log('Zapisano:', result);

    setTitle('');
    setAuthor('');
    setText('');
    setFile(null);
    setPendingImages([]);
    setSuccessMessage('Dane zapisane pomyślnie.');
  } catch (err) {
    console.error('Wystąpił błąd:', err);
    setSuccessMessage('Wystąpił błąd podczas zapisu.');
  }
};


  return (
    <div style={{ marginTop: 20, border: '3px solid #eb549aff', padding: 10 }}>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      {!successMessage && (
        <>
          <div>
            {dataType !== "kindergardens" && dataType !== "partnerslist" ?(<p>Tytuł</p>):(<p>Nazwa</p>)}   
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Wpisz tytuł"
              className={css.titleInput}
            />
          </div>
          {dataType === "getblogcontnet" && (
          <div>
            <p>Autor</p>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Wpisz Autora"
              className={css.titleInput}
            />
          </div>
          )}
            
            {dataType !== "kindergardens" && dataType !== "partnerslist" && (
               <div>
              <p>Tekst</p>
            <TextEditor
              value={editorContent}
              onChange={setEditorContent}
              addPendingImage={(file, localUrl) =>
                setPendingImages((prev) => [...prev, { file, localUrl }])
              }
            />
             </div>
          )}
         

          <div style={{ marginTop: 15 }}>
            <p>Zdjęcie (główne)</p>
            <input type="file" accept="image/*" onChange={onFileChange} />
            {preview && <img src={preview} alt="Podgląd" style={{ width: 200, marginTop: 10 }} />}
          </div>
          <button id={dataType} onClick={onClick} style={{ marginTop: 15 }}>Zapisz</button>
        </>
      )}
    </div>
  );
};

export default AddContent;
