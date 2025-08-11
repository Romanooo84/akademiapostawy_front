import Modal from '../../components/blog/modal';
import blogsContent from  './blogsContnent';
import BlogShortText from '../../components/blog/blogShortText';
import { useState } from "react";
import css from "./blog.module.css";

const Blog = () => {

  const [selectedBlog, setSelectedBlog] = useState(null);


  const shortContent= BlogShortText( {blogsContent, setSelectedBlog} );
  const modal=Modal({ setSelectedBlog, selectedBlog });

    return (
    <div className={css.mainDiv}>
      {shortContent}
      {selectedBlog && modal}
    </div>
  );
};

export default Blog;
