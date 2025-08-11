import css from "./blog.module.css";
import ReactMarkdown from 'react-markdown'

const BlogShortText = ( {blogsContent, setSelectedBlog }) => {

    const handleOpenModal = (blog) => {
        setSelectedBlog(blog);
    };

    const markup = blogsContent.map((blog, index) => {
        const words = blog.content.trim().split(/\s+/);
        const shortContent =
          words.length > 50
            ? words.slice(0, 50).join(" ") + "..."
            : blog.content;
    
        return (
          <div
            className={css.contentDiv}
            key={index}
            onClick={() => handleOpenModal(blog)} 
            style={{ cursor: "pointer" }}
          >
            <ReactMarkdown>{blog.title}</ReactMarkdown>
            <ReactMarkdown>{blog.author}</ReactMarkdown>
            <div>{shortContent}</div>
          </div>
        );
      });
      return markup
    }
export default BlogShortText;