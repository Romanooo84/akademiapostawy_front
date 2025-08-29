import css from './contact.module.css';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import Dorota from './photos/DOROTA_PORTRAIT.png';
import Ola from './photos/OLA_PORTRAIT.png';

const Contact = () => {
  return (
    <div className={css.main}>
        <div className={css.missionDiv}>
            <h1>Nasza misja</h1>
            <div className={css.headerText}>
                <h3 className={css.header3}>Jesteśmy fizjoterapeutkami pracującymi z dziećmi i młodzieżą z wadami postawy. Na co dzień w gabinecie spotykamy się z rodzicami, którzy są zagubieni w chaosie informacyjnym. Po poszukiwaniach odpowiedzi w internecie uzyskują często kompletnie rozbieżne lub ogólnikowe informacje.</h3>
                <h3 className={css.header3}>To skłoniło nas do stworzenia miejsca, w którym znajdziecie rzetelne wiadomości na temat wad postawy. Chcemy podzielić się z Wami naszą wiedzą i doświadczeniem, aby wesprzeć Was w codziennym dbaniu o prawidłową postawę Waszych dzieci.</h3>
            </div>
        </div>
        <div className={css.contactsMainDiv}>
            <div className={css.mainDiv}>     
                <img className={css.img} src={Dorota} alt="Dorota" />
                <div className={css.descriptionAndContactDiv}>
                    <div className={css.textDiv}>
                        <h1>Kontakt</h1>
                        <p><IoIosContact  />Dorota Marczak</p>
                        <p><MdOutlinePhoneAndroid/> Telefon: +48 123 456 789</p>
                        <p><MdEmail/> Email: kontakt@kontakt.pl  </p>        
                    </div>
                    <p>Już od dziecka marzyłam, aby pomagać innym. Umożliwiła mi to praca fizjoterapeutki. Od wielu lat specjalizuję się w wadach postawy oraz skoliozach u dzieci i młodzieży. Tworzę sieć klinik medycznych, których celem jest wspieranie zdrowego stylu życia od najmłodszych lat. Jeszcze będąc studentką, z pasją zgłębiałam temat pozytywnego wpływu aktywności fizycznej na postawę ciała dzieci i młodzieży. Dużo czasu spędzam na uświadamianiu rodziców, jak ważna jest profilaktyka kształtowania postawy ciała. Dlatego też przeprowadziłam już ponad 1500 badań przesiewowych, dzięki którym wychwyciłam nieprawidłowości u dzieci i mogłam szybko zareagować zanim wada postawy mocno się rozwinęła. Moją pasją jest nowoczesna technologia w fizjoterapii. Wykorzystuje ją, aby badać pacjenta, analizować i porównywać wyniki oraz motywować dziecko podczas terapii. Moim celem jest wyleczenie w radosnej atmosferze. Widząc efekty terapii u tych młodych pacjentów, czuję ogromną satysfakcję. Prywatnie jestem żoną i matką dwójki dzieci. W wolnym czasie uwielbiam biegać, czytać książki i aktywnie spędzać czas z rodziną.</p>
                </div>
            </div>
             <div className={css.mainDiv}>     
                <img className={css.img} src={Ola} alt="Aleksandra" />
                <div className={css.descriptionAndContactDiv}>
                    <div className={css.textDiv}>
                        <h1>Kontakt</h1>
                        <p><IoIosContact  />Aleksandra Dobrzyńska</p>
                        <p><MdOutlinePhoneAndroid/> Telefon: +48 123 456 789</p>
                        <p><MdEmail/> Email: kontakt@kontakt.pl  </p>        
                    </div>
                    <p>Jestem fizjoterapeutką oraz terapeutką integracji sensorycznej z wieloletnim stażem pracy. Specjalizuję się w terapii wad postawy i skolioz. Staram się łączyć najnowsze zdobycze nauki z praktyką fizjoterapeutyczną. Cały czas podnoszę swoje kwalifikacje, uczestnicząc w licznych szkoleniach. Prywatnie jestem mamą sześciolatka, co uświadomiło mi jak bardzo ważne i trudne jest znalezienie rzetelnego źródła informacji na temat rozwoju dziecka w wieku przedszkolnym. W wolnym czasie lubię czytać najnowsze doniesienia ze świata psychologii.</p>
                </div>
            </div>
        </div>
    </div>
  );
}       

export default Contact;