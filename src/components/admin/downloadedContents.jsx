import css from './downloadedContent.module.css'

// DownloadedContents.jsx
const DownloadedContents = ({ entries, onClick, onEdit }) => {
  return (
    <div style={{ marginTop: 20 }}>
      {entries.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: 20,
            border: "2px solid #303686ff",
            padding: 10,
          }}
        >
          <p>Tytuł: {item.title}</p>
          <p>Autor: {item.author}</p>
          <div className={css.itemContent} dangerouslySetInnerHTML={{ __html: item.content}}/>
          {item.img && (
            <img
              src={item.img}
              alt="Blog"
              style={{ width: "200px", height: "auto" }}
            />
          )}

          <button
            className={css.button}
            onClick={onClick}
            data-title={item.title}
            style={{ marginTop: 10 }}
          >
            X skasuj
          </button>

          <button
            className={css.button}
            onClick={() => onEdit(item)}
            style={{ marginTop: 10 }}
          >
            edytuj
          </button>
        </div>
      ))}
    </div>
  );
};

export default DownloadedContents