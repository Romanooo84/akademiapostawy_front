import link from '../../link';
import { useState } from 'react';
import TextEditor from './textEditor';
import css from './addingContent.module.css';

const AddContent = ({ preview, handleFileChange, dataType }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState(''); // <- tutaj masz treść z edytora
    const [file, setFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        handleFileChange(e);
    };

    const onClick = async () => {
        const formData = new FormData();
        formData.append('title', `${title}`);
        formData.append('author', `${author}`);
        formData.append('text', text); // <- tu było fullText, a powinno być text
        formData.append('dataType', dataType);

        if (file) formData.append('image', file);
        console.log([...formData]);

        try {
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
                        <p>Tytuł</p>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Wpisz tytuł"
                            className={css.titleInput}
                        />
                    </div>
                    <div>
                        <p>Autor</p>
                        <input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Wpisz Autora"
                            className={css.titleInput}
                        />
                    </div>
                    <div>
                        <p>Tekst</p>
                        <TextEditor value={text} onChange={setText} />
                    </div>

                    <div style={{ marginTop: 15 }}>
                        <p>Zdjęcie</p>
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
