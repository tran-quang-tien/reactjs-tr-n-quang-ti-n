import React from 'react'

export default function TqtListstudent({ tqtListudent,onedit,  tqtdel }) {

    console.log(tqtListudent);
    
    const tqtedit =(tqtParam)=>{
       console.log("click edit:" ,tqtParam);
       onedit(tqtParam);

    }
    const tqtdelete =(tqtParam)=>
        {
            if(window.confirm('muon xoa khong')){
                tqtdel(tqtParam)
            }

        }

    let tqtElementStudent = tqtListudent.map((task, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{task.Tqt_id}</td>
        <td>{task.Tqt_name}</td>
        <td>{task.Tqt_Age}</td>
        <td>{task.Tqt_Phone}</td>
        <td>{task.Tqt_Status}</td>
        <td>
          <button className='btn btn-success' onClick={()=>tqtedit(task)}>edit</button>
          <button className='btn btn-danger'onClick={()=>tqtdelete(task)}>delete</button>
        </td>
      </tr>
    ));
  
    return (
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Stt</th>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tqtElementStudent}
          </tbody>
        </table>
      </div>
    );
  }