import { useState, useEffect } from "react";
import Modal from '../../components/blog/modal';
import BlogShortText from '../../components/blog/blogShortText';
import link from '../../link';
import css from "./blog.module.css";

const Blog = () => {
  const [blogList, setBlogList] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Pobieranie listy blogów
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${link}getblogcontent`);
        if (!response.ok) throw new Error('Błąd pobierania danych');
        const data = await response.json();
        console.log('Pobrano listę blogów:', data);
        setBlogList(data);
      } catch (error) {
        console.error('Nie udało się pobrać listy:', error);
      }
    };

    fetchBlog();
  }, []);


  return (
    <>
      {blogList.length > 0 && (
        <div className={css.mainDiv}>
          {/* Poprawne renderowanie komponentów */}
          <BlogShortText blogList={blogList} setSelectedBlog={setSelectedBlog} />
          {selectedBlog && (
            <Modal setSelectedBlog={setSelectedBlog} selectedBlog={selectedBlog} />
          )}
        </div>
      )}
    </>
  );
};

export default Blog;
