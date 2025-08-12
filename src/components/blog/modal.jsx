import css from "./modal.module.css";
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
            <div className={css.buttonDiv}>
            <button className={css.button} onClick={handleCloseModal}>X</button>
            </div>

            {/* Teraz mamy dostęp do wszystkich danych bloga */}
            <ReactMarkdown>{selectedBlog.title}</ReactMarkdown>
            <div className={css.contentDiv}>
              <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
              <ReactMarkdown>{selectedBlog.author}</ReactMarkdown>
            </div>

          </div>
        </div>
        )
}

export default Modal;