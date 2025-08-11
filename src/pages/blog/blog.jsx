import ReactMarkdown from 'react-markdown'
import css from './blog.module.css';
import blogsContent from  './blogsContnent';
import { useState } from "react";

const Blog = () => {

  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog); // tu przekazujemy cały obiekt
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  const markup = blogsContent.map((blog, index) => {
    const words = blog.content.trim().split(/\s+/);
    const shortContent =
      words.length > 50
        ? words.slice(0, 50).join(" ") + "..."
        : blog.content;

    return (
      <div
        className={css.mainDiv}
        key={index}
        onClick={() => handleOpenModal(blog)} // przekazanie całego obiektu
        style={{ cursor: "pointer" }}
      >
        <ReactMarkdown>{blog.title}</ReactMarkdown>
        <ReactMarkdown>{blog.author}</ReactMarkdown>
        <div>{shortContent}</div>
      </div>
    );
  });

    return (
    <>
      {markup}

      {selectedBlog && (
        <div className={css.modalOverlay} onClick={handleCloseModal}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()} // blokuje zamknięcie po kliknięciu w treść
          >
            <button onClick={handleCloseModal}>X</button>

            {/* Teraz mamy dostęp do wszystkich danych bloga */}
            <ReactMarkdown>{selectedBlog.title}</ReactMarkdown>
            <ReactMarkdown>{selectedBlog.author}</ReactMarkdown>
            <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>

            {/* Jeżeli w obiekcie blog są inne pola */}
            {selectedBlog.date && <p>Data: {selectedBlog.date}</p>}
            {selectedBlog.tags && (
              <ul>
                {selectedBlog.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
