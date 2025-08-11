import css from "./blog.module.css";
import ReactMarkdown from 'react-markdown'

const Modal= ({ setSelectedBlog, selectedBlog}) => {

    if (selectedBlog === null) {
        return null; // jeżeli nie ma wybranego bloga, nie renderujemy modala
    }

    const handleCloseModal = () => {
    setSelectedBlog(null);
  };

    return(
  <div className={css.modalOverlay} onClick={handleCloseModal}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()} // blokuje zamknięcie po kliknięciu w treść
          >
            <button onClick={handleCloseModal}>X</button>

            {/* Teraz mamy dostęp do wszystkich danych bloga */}
            <ReactMarkdown>{selectedBlog.title}</ReactMarkdown>
            <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
            <ReactMarkdown>{selectedBlog.author}</ReactMarkdown>

          </div>
        </div>
        )
}

export default Modal;