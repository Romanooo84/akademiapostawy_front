import css from "./modal.module.css";
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
            <h1 className={css.header1}>{selectedBlog.title}</h1>
            <div className={css.contentDiv}>
              <div dangerouslySetInnerHTML={{ __html: selectedBlog.content}}/>
              <h2 className={css.header2}>{selectedBlog.author}</h2>
            </div>

          </div>
        </div>
        )
}

export default Modal;