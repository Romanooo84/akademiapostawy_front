import css from './downloadedContent.module.css'

const DownloadedContents = ({entries, onClick}) => {
  return (
    <div style={{ marginTop: 20 }}>
        {entries.map((item, index) => (
          <div key={index} style={{ marginBottom: 20, border: '2px solid #303686ff', padding: 10 }}>
            <p>Tytuł: {item.title}</p>
            <p>Autor: {item.author}</p>
            <p className={css.itemContent}>{item.content}</p>
            {item.img && <img src={item.img} alt="Blog" style={{ width: "200px", height: "auto" }} />}
            <button className={css.button} onClick={onClick} data-title={item.title} style={{ marginTop: 10 }}>
              X skasuj
            </button>
          </div>
        ))}
      </div>
        
  )
}

export default DownloadedContents