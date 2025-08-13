import picture1 from './analiza.jpg'
import css from './project2.module.css'
import text from './text'
import ReactMarkdown from 'react-markdown'

const Screening = ()=>{

    const imagesMap = {
                        picture1,
                    };

   return (
  <div className={css.mainDiv}>
    <h1 className={css.h1}>Badania przesiewowe to pierwszy krok do zdrowej postawy Twojego dziecka!</h1>
    
    <div>
      <iframe
        src="https://www.youtube.com/embed/HnL7d_qMsCA"
        title="Akademia Postawy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: '900px',
          height: '500px',
        }}
      ></iframe>
    </div>
    <div className={css.text}>
        <ReactMarkdown
                    components={{
                    img: ({ ...props }) => {
                    const src = imagesMap[props.src] || props.src;
                    return (
                        <img
                        {...props}
                        src={src}
                        alt={props.alt}
                        className={css.image}
                        />
                    );
                    }
                }} >
            {text}
        </ReactMarkdown>
    </div>
  </div>
);
}

export default Screening