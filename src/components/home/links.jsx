import css from './links.module.css';
import picture1 from '../../images/chlopiec.jpg';
import picture2 from '../../images/doktor.jpg';
import picture3 from '../../images/miednica.jpg';
import picture4 from '../../images/stopy.jpg';

const Links = () => {

return(
    <div className={css.mainDiv}>
        <div className={css.linkDiv}>
            <a href="https://www.facebook.com/akademiapostawy" target="_blank" rel="noopener noreferrer">
            <img src={picture1} alt="Chłopiec z piłką" className={css.picture}/></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus lacus metus. Fusce et ipsum in lorem pharetra aliquam. Nullam mauris quam, vulputate ut nulla nec, hendrerit porta est. In hac habitasse platea dictumst. Phasellus gravida turpis eget metus lobortis, eu tempor risus elementum. Cras sed nulla neque. Nunc dapibus tincidunt venenatis. </p>
        </div>
        <div className={css.linkDiv}>
            <a href="https://www.facebook.com/akademiapostawy" target="_blank" rel="noopener noreferrer">
            <img src={picture2} alt="Chłopiec z piłką" className={css.picture}/></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus lacus metus. Fusce et ipsum in lorem pharetra aliquam. Nullam mauris quam, vulputate ut nulla nec, hendrerit porta est. In hac habitasse platea dictumst. Phasellus gravida turpis eget metus lobortis, eu tempor risus elementum. Cras sed nulla neque. Nunc dapibus tincidunt venenatis.</p>
        </div>
         <div className={css.linkDiv}>
            <a href="https://www.facebook.com/akademiapostawy" target="_blank" rel="noopener noreferrer">
            <img src={picture3} alt="Chłopiec z piłką" className={css.picture}/></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus lacus metus. Fusce et ipsum in lorem pharetra aliquam. Nullam mauris quam, vulputate ut nulla nec, hendrerit porta est. In hac habitasse platea dictumst. Phasellus gravida turpis eget metus lobortis, eu tempor risus elementum. Cras sed nulla neque. Nunc dapibus tincidunt venenatis.</p>
        </div>
         <div className={css.linkDiv}>
            <a href="https://www.facebook.com/akademiapostawy" target="_blank" rel="noopener noreferrer">
            <img src={picture4} alt="Chłopiec z piłką" className={css.picture}/></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus lacus metus. Fusce et ipsum in lorem pharetra aliquam. Nullam mauris quam, vulputate ut nulla nec, hendrerit porta est. In hac habitasse platea dictumst. Phasellus gravida turpis eget metus lobortis, eu tempor risus elementum. Cras sed nulla neque. Nunc dapibus tincidunt venenatis.</p>
        </div>
    </div>
)
}

export default Links;