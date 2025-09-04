import link from '../../link';
import { useState } from 'react';
import css from './addingContent.module.css';

const AddContent = ({ preview, handleFileChange, dataType }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [extraFields, setExtraFields] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        handleFileChange(e);
    };

    const addHeaderField = () => {
        setExtraFields([...extraFields, { type: 'header', value: '' }]);
    };

    const addTextField = () => {
        setExtraFields([...extraFields, { type: 'text', value: '' }]);
    };

    const handleExtraChange = (index, newValue) => {
        const updated = [...extraFields];
        updated[index].value = newValue;
        setExtraFields(updated);
    };

    const onClick = async () => {
        let fullText = text;
        extraFields.forEach((field) => {
            if (field.type === 'header') {
                fullText += `\n### ${field.value}`;
            } else {
                fullText += `\n${field.value}`;
            }
        });

        const formData = new FormData();
        formData.append('title', `# ${title}`);
        formData.append('author', `## ${author}`)
        formData.append('text', fullText);
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

            // czyścimy pola i pokazujemy komunikat
            setTitle('');
            setAuthor('')
            setText('');
            setFile(null);
            setExtraFields([]);
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
                    </div><div>
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
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Wpisz tekst"
                            className={css.textInput}
                        />
                    </div>

                    {extraFields.map((field, index) => (
                        <div key={index}>
                            {field.type === 'header' ? (
                                <input
                                    type="text"
                                    value={field.value}
                                    onChange={(e) => handleExtraChange(index, e.target.value)}
                                    placeholder="Dodatkowy nagłówek"
                                    className={css.titleInput}
                                />
                            ) : (
                                <textarea
                                    value={field.value}
                                    onChange={(e) => handleExtraChange(index, e.target.value)}
                                    placeholder="Dodatkowy tekst"
                                    className={css.textInput}
                                />
                            )}
                        </div>
                    ))}

                    <div style={{ marginTop: 10 }}>
                        <button type="button" onClick={addHeaderField}>
                            Dodaj nagłówek
                        </button>
                        <button type="button" onClick={addTextField} style={{ marginLeft: 10 }}>
                            Dodaj tekst
                        </button>
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