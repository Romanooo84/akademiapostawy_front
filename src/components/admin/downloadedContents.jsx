import css from './downloadedContent.module.css'

// DownloadedContents.jsx
const DownloadedContents = ({ entries, onClick, onEdit, dataType }) => {

    console.log(dataType)
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
          {dataType===`getblogcontent` || dataType===`projectscontent`|| dataType===`getmainpicturelist`?(<p>Tytuł: {item.title}</p>):(<p> {item.title}</p>)}
          {dataType===`getblogcontent`?(<p>Autor: {item.author}</p>):(<></>)}
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