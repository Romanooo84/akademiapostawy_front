import css from "./blog.module.css";
import ReactMarkdown from 'react-markdown'
import kobieta from '../../images/blog/kobieta.jpg';

const BlogShortText = ( {blogsContent, setSelectedBlog }) => {

    const handleOpenModal = (blog) => {
        setSelectedBlog(blog);
    };

    const markup = blogsContent.map((blog, index) => {
      const content = blog.content.trim();
      const hashIndex = content.indexOf('#');
      
      let shortContent;

      if (hashIndex !== -1) {
        shortContent = content.slice(0, hashIndex).trim() + '...';
      } else {
        const words = content.split(/\s+/);
        shortContent = words.length > 50
          ? words.slice(0, 50).join(' ') + '...'
          : blog.content;
      }
        
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
              <ReactMarkdown>{blog.author}</ReactMarkdown>
              <ReactMarkdown>{shortContent}</ReactMarkdown>
            </div>
          </div>
        );
      });
      return markup
    }
export default BlogShortText;