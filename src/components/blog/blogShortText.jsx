import css from "./blog.module.css";
import ReactMarkdown from 'react-markdown'


const BlogShortText = ( {blogList, setSelectedBlog }) => {

    const handleOpenModal = (blog) => {
        setSelectedBlog(blog);
    };

    const markup = blogList.map((blog, index) => {
      let content = blog.content.trim();
      const hashIndex = content.indexOf('#');

      if (hashIndex !== -1) {
        content = content.slice(0, hashIndex).trim();
      }

      const words = content.split(/\s+/);
      const shortContent = words.length > 25
        ? words.slice(0, 25).join(' ') + '...'
        : content + (hashIndex !== -1 ? '...' : '');
        
        return (
          <div
            className={css.contentDiv}
            key={index}
            onClick={() => handleOpenModal(blog)} 
            style={{ cursor: "pointer" }}
          >
            <img src={blog.img} alt="Blog" className={css.image} />
            <div className={css.titleDiv}>
              <ReactMarkdown>{blog.title}</ReactMarkdown>
              <div className={css.header2}>
                <ReactMarkdown>{blog.author}</ReactMarkdown>
              </div>
              <div className={css.paragraph}>
                <ReactMarkdown>{shortContent}</ReactMarkdown>
              </div>
            </div>
          </div>
        );
      });
      return markup
    }
export default BlogShortText;