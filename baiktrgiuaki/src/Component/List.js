import React from 'react'
import axios from 'axios';


export default function List( {renderTqtStudentlist}) {
    let tqtElement =  renderTqtStudentlist.map((tqtStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{tqtStudent.TqtMaSv}</td>
                <td>{tqtStudent.TqtHoSv}</td>
                <td>{tqtStudent.TqtTenSv}</td>
                <td>{tqtStudent.TqtPhai}</td>
                <td>{tqtStudent.TqtNgaySinh}</td>
                <td>{tqtStudent.TqtNoiSinh}</td>
                <td>{tqtStudent.TqtMaKh}</td>
                <td>{tqtStudent.TqtHocBong}</td>
                <td>{tqtStudent.TqtDiemTb}</td>
                <td>
                       <button className='btn btn-danger'onClick={()=>tqtDelete(tqtStudent)}>Xoa</button>
                </td>

            </tr>

        )
    })
    const tqtDelete= async (param)=>{
        const response = await axios.delete("https://667cdf2f3c30891b865e0097.mockapi.io/API/Tqtv1/SinhVien",param.id)}
  return (
    <div>
        <h3>danh sach sinh vien</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã SV</th>
                        <th scope="col">Họ Sv</th>
                        <th scope="col">Tên Sv</th>
                        <th scope="col">Phái</th>
                        <th scope="col">Ngày Sinh</th>
                        <th scope="col">Nơi Sinh</th>
                        <th scope="col">Mã Khóa học</th>
                        <th scope="col">Học Bổng</th>
                        <th scope="col">Điểm Trung Bình</th>
                        <th scope="col">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                {tqtElement}
                </tbody>
            </table>
    </div>
  )
}
