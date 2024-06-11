import './App.css';
import React, { useState } from 'react'
import TqtListstudent from './Component/TqtListstudent';
import TqtAddandedit from './Component/TqtAddandedit';

function App() {
  const TqtListStudent = [
    { Tqt_id: 1, Tqt_name: "Tran quang tien", Tqt_Age: "18", Tqt_Phone: "012345678", Tqt_Status: "true" },
    { Tqt_id: 2, Tqt_name: "tran tien", Tqt_Age: "21", Tqt_Phone: "012345678", Tqt_Status: "false" },
    { Tqt_id: 3, Tqt_name: "quang tien", Tqt_Age: "24", Tqt_Phone: "012345678", Tqt_Status: "false" },
  ];
  const [tqtListudent, setTqtListudent] = useState(TqtListStudent);

  const Tqttaskobj = {
    Tqt_id: 0,
    Tqt_name: '',
    Tqt_Age: '',
    Tqt_Phone: '',
    Tqt_Status: '',
  };

  const[Tqttaskad, setTqtTask] = useState(Tqttaskobj);

  const change = (tqtParam) => {
    console.log("App:", tqtParam);
    setTqtListudent((prev) => {
      return [...prev, tqtParam];
    });
  };

  const tqteditHandler = (tqtParam) => {
    console.log("App-edit:", tqtParam);
    if (TqtAddandedit === true) {
      setTqtTask((prev) => {
        return [...prev, tqtParam];
      });
    } else {
      const updatedTqtListudent = [...tqtListudent];
      for (let i = 0; i < updatedTqtListudent.length; i++) {
        if (updatedTqtListudent[i].Tqt_id === tqtParam.Tqt_id) {
          updatedTqtListudent[i] = tqtParam;
          break;
        }
      }
      setTqtListudent(updatedTqtListudent);
    }
  };

  const handledel =(tqtParam)=>{
    let tqtresult = tqtListudent.filter(x=>x.Tqt_id !== tqtParam.Tqt_id);
    setTqtListudent(tqtresult);
  }

  return (
    <div className="container border">
      <h1>tran quang tien</h1>
      <TqtListstudent tqtListudent={tqtListudent}
        onedit={tqteditHandler} tqtdel={handledel}/>
      <TqtAddandedit tqtOnSubmit={change} tqtListudent={tqtListudent}  renderTqttask={Tqttaskad}/>
    </div>
  );
}

export default App;