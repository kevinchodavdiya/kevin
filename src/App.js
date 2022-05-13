import logo from './logo.svg';
import './App.css';
import Time from './kevin/time';
import Timefun from './kevin/Timefun';
import { useEffect, useState } from 'react';
import loading from './componet/loading';
import home from './container/home/home';
// import Changecountry from './kevin/container';

const HomewithLoading = loading(home)


function App() {
    const[loading,setLoading] = useState(false);
    const[date,setDate] = useState([]);

    let orgDate =[
      {id:777, name:"kevin"},
      {id:777, name:"chodavdiya"},
    ]

    useEffect(
      () => {
        setLoading(true);
        setTimeout(() => {setLoading(false); setDate(orgDate)},3000);
      },
    [])

    console.log(loading,date);

  return (
    <>
      <HomewithLoading
        isloading={loading}
        date={date}
        />
    </>
  );
}

export default App;
