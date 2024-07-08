
import './App.css';
import axios from 'axios';
import Studenlist from './Component/Studenlist';
import { useEffect, useState } from 'react';
import TqtAddorEdit from './Component/TqtAddorEdit';

function App() {
  const [tqtStudentlist, setTqtStudentlist] = useState([]);
  const tqtGetStudent = async () => {
    try {
      const response = await axios.get("https://667cdf2f3c30891b865e0097.mockapi.io/API/Tqtv1/TqtLesson10");
      setTqtStudentlist(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    tqtGetStudent();
  }, []);

  const [tqtAddorEdit, setTqtAddorEdit] = useState(false);

  const tqtInitUser = {
    UserName: "TranQuangTien",
    Pass: "TranQuangTien",
    email: "TranQuangTien@gmail.com",
    phone: "123456789",
    id: "1"
  }
  
  const [tqtUser, setTqtUser] = useState(tqtInitUser);

  const tqtAddnew = () => {
    setTqtAddorEdit(true);
  }

  const tqtClose = (param) => {
    setTqtAddorEdit(param);
  }

  const TqtSubmit = (param) => {
    tqtGetStudent();
    setTqtAddorEdit(param);
  }

  let tqtelementForm = tqtAddorEdit === true ?
    <TqtAddorEdit renderUser={tqtUser}
      onTqtClose={tqtClose}
      ontqtSubmit={TqtSubmit} /> : ""
  return (
    <div className="container bordered">
      <h1>Lesson 10</h1>
      <hr />
      <Studenlist renderTqtStudentlist={tqtStudentlist} />
      <button className='btn btn-primary' name='TqtThemmoi' onClick={tqtAddnew}>Them moi</button>
      <hr />
      {tqtelementForm}
    </div>
  );
}

export default App;
