import { useEffect } from "react";
import css from "./blog.module.css";


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

      const plainText = content.replace(/<[^>]+>/g, ''); 

        // Podziel na słowa
        const words = plainText.split(/\s+/); 

       

        // Skracanie treści
        let shortContent =
        words.length > 25
        ? words.slice(0, 25).join(" ") + "..."
        : plainText + (hashIndex !== -1 ? "..." : "");    

        return (
          <div
            className={css.contentDiv}
            key={index}
            onClick={() => handleOpenModal(blog)} 
            style={{ cursor: "pointer" }}
          >
            <img src={blog.img} alt="Blog" className={css.image} />
            <div className={css.titleDiv}>
              <h1>{blog.title}</h1>
              <div className={css.header2}>
                <h2>{blog.author}</h2>
              </div>
              <div className={css.paragraph}>
                <div dangerouslySetInnerHTML={{ __html: shortContent}}/>
              </div>
            </div>
          </div>
        );
      });
      return markup
    }
export default BlogShortText;