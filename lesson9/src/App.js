
import './App.css';
import {React, useEffect, useState} from 'react';
import axios from 'axios'
import TQList from './Component/TQList';



function App() {
  const[TQTList , settQtlist]=useState();

  const tqtGetstudent = async () =>{
    try{
      const response = await axios.get("https://667cdf2f3c30891b865e0097.mockapi.io/API/Tqtv1/TqtStudent")
      settQtlist(response.data);
    }catch(error){
      console.error("eror fetching date:",error);
    }
  };
  useEffect(()=>{
    tqtGetstudent();
  },[]);
  return (
    <div className="container bordered mt-5 p-3">
      <TQList renderTQTLIST = {TQTList}/>
    </div>
  );
}

export default App;
