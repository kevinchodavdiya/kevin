import logo from './logo.svg';
import './App.css';
import Time from './kevin/time';
import Timefun from './kevin/Timefun';
import { useEffect, useState } from 'react';
import loading from './componet/loading';
import home from './container/home/home';
import Classbass from './time/Classbass';
import Functionbass from './time/Functionbass';
// import Timeclass from './time/Timeclass';
// import Changecountry from './kevin/container';

const HomeWithLoading = loading(home)

function App() {

  // const [loading, setLoading]=useState(false);
  // const [data, setData]=useState([]);

  // let dumData=[
  //   {id:574, name:"Kevin", age:24},
  //   {id:678, name:"Bhabho", age:68},
  //   {id:876, name:"Denish", age:30}
  // ]

  // useEffect(
  //   ()=>{
  //     setLoading(true);
  //     setTimeout(()=>{setLoading(false); setData(dumData)},2000);
  //   },
  // [])
  // console.log(loading,data);

return (
  <>
  {/* <HomeWithLoading
    isLoading={loading}
    DimData={data}
  /> */}
  
  <Classbass/>
  <Functionbass/>
  </>
);
}
export default App;
