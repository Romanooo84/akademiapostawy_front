import css from './contact.module.css';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const Contact = () => {

  const photoAdress='https://srv80578.seohost.com.pl/images/about/'

  return (
    <div className={css.main}>
        <div className={css.contactsMainDiv}>
            <div className={css.mainDiv}>     
                <img className={css.img} src={`${photoAdress}DOROTA_PORTRAIT.png`} alt="Dorota" />
                <div className={css.descriptionAndContactDiv}>
                    <div className={css.textDiv}>
                        <h1><IoIosContact  />Dorota Marczak</h1>
                         <h1 className={css.emailLink}>
                            <MdEmail />{" "}
                            <a href="mailto:kontakt@kontakt.pl">
                                kontakt@kontakt.pl
                            </a>
                        </h1>        
                    </div>
                    <p>Już od dziecka marzyłam, aby pomagać innym. Umożliwiła mi to praca fizjoterapeutki. Od wielu lat specjalizuję się w wadach postawy oraz skoliozach u dzieci i młodzieży. Tworzę sieć klinik medycznych, których celem jest wspieranie zdrowego stylu życia od najmłodszych lat. Jeszcze będąc studentką, z pasją zgłębiałam temat pozytywnego wpływu aktywności fizycznej na postawę ciała dzieci i młodzieży. Dużo czasu spędzam na uświadamianiu rodziców, jak ważna jest profilaktyka kształtowania postawy ciała. Dlatego też przeprowadziłam już ponad 1500 badań przesiewowych, dzięki którym wychwyciłam nieprawidłowości u dzieci i mogłam szybko zareagować zanim wada postawy mocno się rozwinęła. Moją pasją jest nowoczesna technologia w fizjoterapii. Wykorzystuje ją, aby badać pacjenta, analizować i porównywać wyniki oraz motywować dziecko podczas terapii. Moim celem jest wyleczenie w radosnej atmosferze. Widząc efekty terapii u tych młodych pacjentów, czuję ogromną satysfakcję. Prywatnie jestem żoną i matką dwójki dzieci. W wolnym czasie uwielbiam biegać, czytać książki i aktywnie spędzać czas z rodziną.</p>
                </div>
            </div>
             <div className={css.mainDiv}>     
                <img className={css.img} src={`${photoAdress}OLA_PORTRAIT.png`}alt="Aleksandra" />
                <div className={css.descriptionAndContactDiv}>
                    <div className={css.textDiv}>
                        <h1><IoIosContact  />Aleksandra Dobrzyńska</h1>
                         <h1 className={css.emailLink}>
                            <MdEmail />{" "}
                            <a href="mailto:kontakt@kontakt.pl" >
                                kontakt@kontakt.pl
                            </a>
                        </h1>
                    </div>
                    <p>Jestem fizjoterapeutką oraz terapeutką integracji sensorycznej z wieloletnim stażem pracy. Specjalizuję się w terapii wad postawy i skolioz. Staram się łączyć najnowsze zdobycze nauki z praktyką fizjoterapeutyczną. Cały czas podnoszę swoje kwalifikacje, uczestnicząc w licznych szkoleniach. Prywatnie jestem mamą sześciolatka, co uświadomiło mi jak bardzo ważne i trudne jest znalezienie rzetelnego źródła informacji na temat rozwoju dziecka w wieku przedszkolnym. W wolnym czasie lubię czytać najnowsze doniesienia ze świata psychologii.</p>
                </div>
            </div>
        </div>
    </div>
  );
}       

export default Contact;