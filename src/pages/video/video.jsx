import { useState, useEffect } from 'react';
import css from './video.module.css'
import Loader from '../../components/loader/loader';

const Video = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [videoRendered, setVideoRendered] = useState(null);
  const [isLoading, setIsLoading]=useState(true)

  // Funkcja konwertująca standardowy link YouTube na link do embedowania
  const convertYouTubeUrlToEmbed = (url) => {
    const videoIdMatch = url.match(/v=([^&]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url; // jeśli nie znajdzie ID, zwraca oryginalny URL
  };

  useEffect(() => {
    fetch('https://srv80578.seohost.com.pl/myvideolist')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (data != null) {
      const markup = data.map((video, key) => {
        return (
          <div key={key} className={css.videoDiv}>
           
            <h1><strong>{video.title}</strong></h1>
             <div className={css.contentDiv}>
                <div className={css.iframeDiv}>
                  <iframe
                    src={convertYouTubeUrlToEmbed(video.url)}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={css.iframe}
                  ></iframe>
                </div>
                <p>{video.description}</p>
            </div>
            <div className={css.line}></div>
          </div>
        );
      });
      setVideoRendered(markup);
        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 1000 ms = 1 sekunda

        // Czyszczenie timera, gdyby komponent się odmontował wcześniej
        return () => clearTimeout(timeout);
        }
    }, [data]);

  if (error) {
    return <p>Błąd: {error}</p>;
  }

    return (
      isLoading ? (
        <div>
          <Loader/>
        </div>
      ) : (
        <div className={css.mainDiv}>
          {videoRendered}
        </div>
      )
);
};

export default Video;
