import css from "./modal.module.css";
import ReactMarkdown from 'react-markdown'

const Modal= ({ setSelectedBlog, selectedBlog}) => {

    if (selectedBlog === null) {
        return null; // jeżeli nie ma wybranego bloga, nie renderujemy modala
    }

    const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  const markdownComponents = {
  h1: ({ node, ...props }) => <h1 className={css.header1} {...props} />,
  h2: ({ node, ...props }) => <h2 className={css.header2} {...props} />,
  h3: ({ node, ...props }) => <h3 className={css.header3} {...props} />,
  p: ({ node, ...props }) => <p className={css.paragraph} {...props} />,
  li: ({ node, ...props }) => <li className={css.li} {...props} />,
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
            <ReactMarkdown components={markdownComponents}>{selectedBlog.title}</ReactMarkdown>
            <div className={css.contentDiv}>
              <ReactMarkdown components={markdownComponents}>{selectedBlog.content}</ReactMarkdown>
              <ReactMarkdown components={markdownComponents}>{selectedBlog.author}</ReactMarkdown>
            </div>

          </div>
        </div>
        )
}

export default Modal;