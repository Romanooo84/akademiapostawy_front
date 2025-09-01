import { useState, useEffect } from 'react';
import AddContent from './addingContent';
import DownloadedContents from './downloadedContents';
import link from '../../link';

const AdminContent = ({ data, dataType, startAddContent, setStartAddContent }) => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [entries, setEntries] = useState(data); // lista wpisów
  

  const onClick = async (e) => {
    const { title } = e.target.dataset;
    console.log('Kasuję:', title);

    try {
      const res = await fetch(`${link}${dataType}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!res.ok) throw new Error("Błąd podczas usuwania");

      const result = await res.json();
      console.log("Usunięto:", result);

      // aktualizacja listy w UI
      setEntries(entries.filter(item => item.title !== title));
    } catch (err) {
      console.error(err);
    }
  };

  // obsługa wyboru pliku i podgląd
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file)); // podgląd
  };

  useEffect(() => {
    setEntries(data) // aktualizacja wpisów przy zmianie data
  },[data]);

  const addContent = () => {
    setStartAddContent(!startAddContent); // włącz/wyłącz formularz
  };

  return (
    <div>
      <button onClick={addContent}>{startAddContent ? 'Anuluj' : 'Dodaj'}</button>

      {/* Formularz dodawania */}
      {startAddContent && <AddContent handleFileChange={handleFileChange} preview={preview} dataType={dataType}/>}

      {/* Lista wpisów */}
     <DownloadedContents entries={entries} onClick={onClick} />
    </div>
  );
};

export default AdminContent;
