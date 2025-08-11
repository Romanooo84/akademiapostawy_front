import ReactMarkdown from 'react-markdown'
import css from './blog.module.css';

const Blog = () => {
    const content= `## Zostawić auto i pobiec do pracy? Czemu nie! Aktywność fizyczna w naszej codzienności.
    Zamiast wsiąść do samochodu, założyłam buty biegowe i pobiegłam do pracy. Dlaczego? Bo to tylko 15 minut różnicy, a korzyści są ogromne!

Jestem pewna, że macie podobnie jak ja – codziennie mnóstwo obowiązków: praca, dom, dzieci, zakupy, obowiązki szkolne, zajęcia dodatkowe, a w weekend jeszcze urodziny, imprezy, odwiedziny u dziadków. W tym wszystkim często powtarzamy sobie: Nie mam czasu na trening, mam tyle na głowie! Ale prawda jest taka, że nasze zdrowie to też obowiązek – wobec siebie, naszej rodziny i przyszłości. Dlatego postanowiłam, że ruch stanie się częścią mojej codzienności. Każdy krok się liczy, każdy ruch ma znaczenie.

Pamiętam jeden wieczór – było zimno, padał deszcz, miałam milion wymówek, by nie wychodzić. Ale pomyślałam o sobie za kilka lat: zdrowej, pełnej energii, aktywnej. Wybiegłam. Wróciłam spocona, szczęśliwa i dumna, że się nie poddałam.

Jaki jest wpływ ruchu na zdrowie człowieka pokazują badania. Już 150-300 minut umiarkowanej aktywności tygodniowo (np. spacer, jazda na rowerze, taniec) lub 75-150 minut intensywnego ruchu (np. bieganie, trening interwałowy) zmniejsza ryzyko przedwczesnej śmierci i wydłuża życie. To tylko 22 minuty dziennie!

Kiedyś nie lubiłam biegać, ale teraz jest to moja ulubiona aktywność. Zaczynałam spokojnie, małymi krokami. Najpierw przebiegłam 1,5 km później 2, 3 km i stopniowo zwiększałam dystans (moje big small steps). Teraz przebiegnięcie do pracy 6,5 km i tyle samo z powrotem nie stanowi dla mnie problemu. Wybrałam taką aktywność, ponieważ dla mnie jest łatwa do zrealizowania. Po prostu wkładam buty i biegnę. Może to być 15 , 20 lub 30 min,a rodzina nawet tego nie odczuwa (może czasami ;)).

Wasza aktywność może być inna, ale najważniejsze jest posiadanie rutyny ćwiczeń, która jest na tyle realistyczna, aby ją utrzymać i łatwo wpleść w życie. Wiem, że nie każdy z Was ma czas na godzinną wizytę na siłowni czy długie biegi. Ale wystarczy mała zmiana nawyków, by każdego dnia dorzucić dawkę ruchu. Zadbaj o aktywny styl życia. Oto kilka pomysłów ode mnie dla Ciebie:

Poranny spacer z dzieckiem. Odwozisz dziecko do szkoły czy przedszkola? Zamiast jechać samochodem, wybierz spacer lub rower, jeśli to możliwe.
Schody zamiast windy. To klasyk, ale działa! Każde wejście po schodach wzmacnia mięśnie nóg i poprawia kondycję.
Aktywny rodzic na placu zabaw. Nie siedź na ławce podczas zabawy dziecka. Baw się z nim, spacerujcie szybko po parku, pobawcie się w podchody, berka lub skorzystajcie wspólnie z siłowni plenerowej.
Zabawy ruchowe w domu. Urządźcie rodzinne tory przeszkód. To nie tylko dużo ruchu kształtującego sylwetkę, ale też świetna zabawa z dzieckiem.
Ćwiczenia przy gotowaniu. Czekasz, aż woda się zagotuje, albo ciasto się zrobi w Termomixie? Zrób deskę, kilka przysiadów, czy pajacyków to świetny sposób na wykorzystanie tej chwili. Zawołaj dziecko i zróbcie to razem.
Aktywny dojazd do pracy. Jeśli masz taką możliwość, dojeżdżaj rowerem, biegnij albo wysiądź przystanek wcześniej i przespaceruj się.
Parkuj dalej. Zamiast jeździć po parkingu w poszukiwaniu najbliższego miejsca, zaparkuj w najdalszym miejscu od sklepu i idź stamtąd pieszo.

Zabieraj psa na więcej spacerów. Jeśli masz psa, wiesz, że prawdopodobnie uwielbiałby więcej spacerów — co byłoby korzystne dla was obojga. Zabieraj ze sobą rodzinę.
Rodzinne wycieczki. Zamiast siedzenia przed telewizorem, wybierzcie weekendowy wypad na rowery, spacer do lasu, wspólne pływanie lub zabawy i gry w plenerze.
Na pewno znajdziesz inne sposoby na ruch w swojej codzienności. Pomyśl co to może być i zrób to od razu. Nie czekaj na kolejny dzień, tydzień czy miesiąc. Tu i teraz 🙂

### Bibliografia:

Dong Hoon Lee, Leandro F.M. Rezende, Hee-Kyung Joh, NaNa Keum, Gerson Ferrari, Juan Pablo Rey-Lopez, Eric B. Rimm, Fred K. Tabung and Edward L. Giovannucci. Long-Term Leisure-Time Physical Activity Intensity and All-Cause and Cause-Specific Mortality: A Prospective Cohort of US Adults. Circulation 2022 Aug 16;146(7):523-534.
Lennert Veerman , Jakob Tarp , Ruth Wijaya , Mary Njeri Wanjau , Holger Möller , Fiona Haigh , Peta Lucas , Andrew Milat. Physical activity and life expectancy: a life-table analysis. Br J Sports Med. 2025 Feb 20;59(5):333-338.`


  return (
  <div className={css.mainDiv}>
  <ReactMarkdown>{content}</ReactMarkdown>;
  </div>)

};

export default Blog;
