const DownloadedContents = ({entries, onClick}) => {
  return (
    <div style={{ marginTop: 20 }}>
        {entries.map((item, index) => (
          <div key={index} style={{ marginBottom: 20, border: '1px solid #ddd', padding: 10 }}>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.content}</p>
            {item.img && <img src={item.img} alt="Blog" style={{ width: "200px", height: "auto" }} />}
            <button onClick={onClick} data-title={item.title} style={{ marginTop: 10 }}>
              X skasuj
            </button>
          </div>
        ))}
      </div>
        
  )
}

export default DownloadedContents