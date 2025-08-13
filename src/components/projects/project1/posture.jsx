import picture1 from './1.jpg';
import picture2 from './2.jpg';
import picture3 from './dobra-zabawa-2.jpg';
import picture4 from './dobra-zabawa-3.jpg';
import picture5 from './ulotka.jpg';
import picture6 from './dyplom.jpg';
import text from './text'
import ReactMarkdown from 'react-markdown'
import css from './project1.module.css';

const Posture = () => {

    const imagesMap = {
                        picture1,
                        picture2,
                        picture3,
                        picture4,
                        picture5,
                        picture6
                    };

    return (
        <div className={css.mainDiv}> 
            <h1 className={css.h1}>Prawidłowa postawa to dobra zabawa</h1>
            <img className={css.mainImg} src={picture2} alt="Posture 2" /> 
            <div className={css.text}>
                <ReactMarkdown 
                    components={{
                        img: ({ ...props }) => {
                        const src = imagesMap[props.src] || props.src;
                        return (
                                <img {...props} src={src} alt={props.alt} className={css.image} />
                            );
                        },
                    }}>
                    {text}
                </ReactMarkdown>
            </div>
            <div className={css.imageDiv}>
                <img className={css.image} src={picture5} alt="Posture 5" /> 
                <img className={css.image} src={picture6} alt="Posture 6" /> 
            </div>
        </div>
    );
}

export default Posture;