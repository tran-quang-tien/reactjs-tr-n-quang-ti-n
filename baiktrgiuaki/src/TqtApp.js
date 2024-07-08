
import './App.css';
import axios from 'axios';
import {useEffect, useState } from 'react';
import List from './Component/List';
import TqtAddorEdit from './Component/TqtAddorEdit';

function App() {
    const [tqtStudentlist, setTqtStudentlist] = useState([]);
    const tqtGetStudent = async () => {
      try {
        const response = await axios.get("https://667cdf2f3c30891b865e0097.mockapi.io/API/Tqtv1/SinhVien");
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
    Masv: "TranQuangTien",
    HoSv: "TranQuangTien",
    Tensv: "TranQuangTien@gmail.com",
    Phai: "123456789",
    Ngaysinh: "1",
    Noisinh: "1",
    MaKh: "1",
    Hocbong: "1",
    Diemthi: "1",
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
    <div className="App">
    <h1>Bài kiểm tra giữa kì </h1>
    <List renderTqtStudentlist={tqtStudentlist}/>
    <button className='btn btn-primary' name='TqtThemmoi' onClick={tqtAddnew}>Them moi</button>
    <hr/>
    {tqtelementForm}
    </div>
  );
}

export default App;
