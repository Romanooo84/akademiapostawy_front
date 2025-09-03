import { useEffect, useState } from "react";
import link from '../../link';
import AdminContent from "../../components/admin/adminContent";
import css from './admin.module.css'

const Admin = () => {


const [data, setDdata] = useState([]);
const [dataType, setDataType] = useState('');
const [startAddContent, setStartAddContent] = useState(false);

 useEffect(() => {
   console.log('Component mounted');
  }, []);


  const fetchData = async (lastPart) => {
    console.log('Pobieram dane dla:', lastPart);
      try {
        const response = await fetch(`${link}${lastPart}`);
        if (!response.ok) throw new Error('Błąd pobierania danych');
        const data = await response.json();
        setDdata(data);
      } catch (error) {
        console.error('Nie udało się pobrać listy zdjęć:', error);
      }
    };

  const onClick = (buttonID) => {
    setDataType(buttonID);
    const lastPart=buttonID;
    fetchData(lastPart);
    setStartAddContent(false); // ukryj formularz przy zmianie typu danych
    };

return (
    <>
    <div className={css.buttonContainer}>
        <button className={css.button} onClick={() => onClick('getblogcontent')}>pobierz blog</button>
        <button className={css.button} onClick={() => onClick('projectscontent')}>pobierz projekty</button>
        <button className={css.button} onClick={() => onClick('getmainpicturelist')}>pobierz zdjęcia na główną</button>
    </div>
    {data.length >0 && <AdminContent data={data}  dataType={dataType} setStartAddContent={setStartAddContent} startAddContent={startAddContent}/>}

    </>

);
}   

export default Admin;