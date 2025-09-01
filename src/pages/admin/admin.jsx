import { useEffect, useState } from "react";
import link from '../../link';

const Admin = () => {


const [data, setDdata] = useState([]);


  const fetchData = async (lastPart) => {
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
    console.log(buttonID);
    const lastPart=buttonID;
    fetchData(lastPart);
    };

    const markup = data.map((item, index) => {
        console.log(item);
      return (
        <>
        <div key={index}>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.content}</p>
            <img src={item.img} alt="Blog" style={{ width: '200px', height: 'auto' }} />
        </div>
        <button>X skasuj</button>
        </>
    )})

return (
    <>
    <div>  
        <button onClick={() => onClick('getblogcontent')}>pobierz blog</button>
        <button onClick={() => onClick('projectscontent')}>pobierz projekty</button>
        <button onClick={() => onClick('getmainpicturelist')}>pobierz zdjęcia na główną</button>
    </div>
    <div>{markup}</div>

    </>

);
}   

export default Admin;