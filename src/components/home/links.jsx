import css from './links.module.css';
import picture1 from '../../images/chlopiec.jpg';
import picture2 from '../../images/doktor.jpg';
import picture3 from '../../images/miednica.jpg';
import picture4 from '../../images/stopy.jpg';
import { useNavigate } from 'react-router-dom';

const Links = () => {
    const navigate = useNavigate();

    return (
        <div className={css.mainDiv}>
            <button onClick={() => navigate('/Blog')} className={css.linkButton}>
                <div className={css.pictureAndTitle}>
                    <img src={picture1} alt="Chłopiec z piłką" className={css.picture} />
                    <div className={css.showText}>
                        <p>Na blogu dzielimy się sprawdzoną wiedzą popartą badaniami naukowymi. Znajdziesz tu inspiracje, praktyczne porady dotyczące profilaktyki wad postawy, zdrowego rozwoju dziecka i ruchowych zabaw na co dzień. To miejsce, gdzie nauka spotyka się z codzienną praktyką.</p>
                    </div> 
                </div>
                 <h1>Blog- wiedza, ciekawostki, praktyczne wskazówki</h1>
            </button>

            <button onClick={() => navigate('/Filmy')} className={css.linkButton}>
                <div className={css.pictureAndTitle}>
                    <img src={picture2} alt="Doktor" className={css.picture} />
                    <div className={css.showText}>
                        <p>Tworzymy i oferujemy produkty wspierające rozwój dzieci, które powstały we współpracy z ekspertami i Politechniką Warszawską. Każde rozwiązanie zostało zaprojektowane tak, by ułatwiało budowanie zdrowych nawyków i pomagało w profilaktyce wad postawy – w domu, szkole i przedszkolu.</p>
                    </div>
                </div>
                <h1>Produkty- praktyczne rozwiązania</h1>
               
            </button>

            <button onClick={() => navigate('/Projekty')} className={css.linkButton}>
                <div className={css.pictureAndTitle}>
                    <img src={picture3} alt="Miednica" className={css.picture} />
                    <div className={css.showText}>
                        <p>Od lat działamy z placówkami edukacyjnymi w całej Polsce, organizując akcje społeczne i warsztaty edukacyjne. Wspieramy przedszkola i szkoły w profilaktyce wad postawy poprzez program Active Kids, badania przesiewowe, terapie indywidualne oraz inne formy zajęć, które uczą dzieci zdrowych nawyków przez zabawę.</p>
                    </div>
                </div>
                <h1>Współpraca z przedszkolami i szkołami</h1>
                
            </button>

            <button onClick={() => navigate('/Filmy')} className={css.linkButton}>
                <div className={css.pictureAndTitle}>
                    <img src={picture4} alt="Stopy" className={css.picture} />
                    <div className={css.showText}>
                        <p>Ćwiczenia mogą być świetną zabawą! W naszych filmach pokazujemy treningi oparte na ciekawych historyjkach i ruchowych wyzwaniach, które angażują dzieci i rozwijają ich wyobraźnię. Dzięki temu maluchy chętnie ćwiczą, a rodzice i nauczyciele dostają gotowe narzędzia do pracy z dziećmi.</p>
                    </div>
                </div>
                <h1>Filmy- treningi, ćwiczenia</h1>
             
            </button>
        </div>
    );
};

export default Links;
