import picture1 from './cover_plecakiR.jpg'
import picture2 from './cover_plecakiR23.jpg'
import css from './project3.module.css'

const BackPacks=()=>{
    return(
        <div className={css.mainDiv}>
           <img className={css.image} src={picture1}></img>
           <img className={css.image} src={picture2}></img>
        </div>
    )
}

export default BackPacks