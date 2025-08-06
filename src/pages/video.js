
import React, { useState, useEffect } from 'react';

const Video=()=>{

    const [data,setData] = useState(null);
    const [setError] = useState(null);
    useEffect(() => {
        fetch('https://srv80578.seohost.com.pl/myvideolist')
        .then(res => {
            if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
            }
            
            return res.json(); // lub .text(), .blob() zależnie od odpowiedzi
        })
        .then(json => setData(json))
        .catch(err => setError(err.message));
    }, [])

    useEffect(() => {
        if (data!=null){
            console.log(data[0].url)
        }
        
    },[data])

    return(
        <>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
                src="https://www.youtube.com/embed/1U18v5nNp6E"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40%',
                height: '40%',
                }}
            ></iframe>
        </div>
    </>
    )
}

export default Video