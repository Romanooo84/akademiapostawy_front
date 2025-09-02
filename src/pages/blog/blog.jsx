import Modal from '../../components/blog/modal';
import BlogShortText from '../../components/blog/blogShortText';
import link from '../../link';
import { useState, useEffect } from "react";
import css from "./blog.module.css";

const Blog = () => {

  const [blogList, setBlogList] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  
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


  const shortContent= BlogShortText( {blogList, setSelectedBlog} );
  const modal=Modal({ setSelectedBlog, selectedBlog });

  useEffect(() => {console.log(selectedBlog)}, [selectedBlog]);

    return (
  <>
    {blogList.length > 0 && (
      <div className={css.mainDiv}>
        {shortContent}
        {selectedBlog && modal}
      </div>
    )}
  </>
);
};

export default Blog;
