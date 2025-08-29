import css from './contact.module.css';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import Dorota from './photos/DOROTA_PORTRAIT.png';
import Ola from './photos/OLA_PORTRAIT.png';

const Contact = () => {
  return (
    <div className={css.contactsMainDiv}>
        <div className={css.mainDiv}>
            <img className={css.img} src={Dorota} alt="Dorota" />
            <div className={css.textDiv}>
                <h1>Kontakt</h1>
                <p><IoIosContact  />Dorota Marczak</p>
                <p><MdOutlinePhoneAndroid/> Telefon: +48 123 456 789</p>
                <p><MdEmail/> Email: kontakt@kontakt.pl  </p>        
            </div>
        </div>
        <div className={css.mainDiv}>
            <img className={css.img} src={Ola} alt="Ola" />
            <div className={css.textDiv}>
                <h1>Kontakt</h1>
                <p><IoIosContact  />Ola</p>
                <p><MdOutlinePhoneAndroid/> Telefon: +48 123 456 789</p>
                <p><MdEmail/> Email: kontakt@kontakt.pl  </p>        
            </div>
        </div>
    </div>
  );
}       

export default Contact;