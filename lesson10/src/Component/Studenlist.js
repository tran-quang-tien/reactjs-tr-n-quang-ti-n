import React from 'react';
import axios from 'axios';

export default function Studenlist({ renderTqtStudentlist }) {
    // console.log("Data:", renderTqtStudentlist)
    let tqtElement = renderTqtStudentlist.map((tqtStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{tqtStudent.id}</td>
                <td>{tqtStudent.UserName}</td>
                <td>{tqtStudent.Pass}</td>
                <td>{tqtStudent.email}</td>
                <td>{tqtStudent.phone}</td>
                <td>
                    <button className='btn btn-danger'onClick={()=>tqtDelete(tqtStudent)}>Xoa</button>
                </td>
            </tr>

        )
    })
    const tqtDelete= async (param)=>{
        const response = await axios.delete("https://667cdf2f3c30891b865e0097.mockapi.io/API/Tqtv1/TqtLesson10",param.id)

    }
    return (
        <div>
            <h3>danh sach sinh vien</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Pass</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                {tqtElement}
                </tbody>
            </table>

        </div>
    )
}
