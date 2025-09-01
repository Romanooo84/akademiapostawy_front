import link from '../../link';
import { useState } from 'react';

const AddContent = ({ preview, handleFileChange, dataType }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState(null); // nowy stan na plik

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        handleFileChange(e); // jeśli potrzebujesz podglądu
    };

    const onClick = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('text', text);
        formData.append('dataType', dataType);
        if (file) formData.append('image', file);

        try {
            const res = await fetch(`${link}${dataType}`, {
                method: 'POST',
                body: formData, // FormData sam ustawia Content-Type
            });

            if (!res.ok) throw new Error('Błąd podczas zapisu');

            const result = await res.json();
            console.log('Zapisano:', result);
        } catch (err) {
            console.error('Wystąpił błąd:', err);
        }
    };

    return (
        <div style={{ marginTop: 20, border: '1px solid #ccc', padding: 10 }}>
            <div>
                <p>Tytuł</p>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Wpisz tytuł"
                />
            </div>
            <div>
                <p>Tekst</p>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Wpisz tekst"
                />
            </div>
            <div>
                <p>Zdjęcie</p>
                <input type="file" accept="image/*" onChange={onFileChange} />
                {preview && <img src={preview} alt="Podgląd" style={{ width: 200, marginTop: 10 }} />}
            </div>
            <button id={dataType} onClick={onClick}>Zapisz</button>
        </div>
    );
};

export default AddContent;
