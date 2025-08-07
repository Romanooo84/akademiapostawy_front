import { useState, useEffect } from 'react';

const Video = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [videoRendered, setVideoRendered] = useState(null);

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
          <div key={key} style={{ marginBottom: '30px' }}>
            <p><strong>{video.title}</strong></p>
            <div style={{ position: 'relative', paddingBottom: '10%', height: '350px' ,width: '350px'}}>
              <iframe
                src={convertYouTubeUrlToEmbed(video.url)}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '700px',
                  height: '500px',
                }}
              ></iframe>
            </div>
            <p>{video.description}</p>
          </div>
        );
      });
      setVideoRendered(markup);
    }
  }, [data]);

  if (error) {
    return <p>Błąd: {error}</p>;
  }

  return <>{videoRendered}</>;
};

export default Video;
