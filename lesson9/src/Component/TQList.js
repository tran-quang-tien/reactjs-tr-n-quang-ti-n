import React from 'react'

export default function tqtList({ renderTQTLIST }) {
    console.log("data", renderTQTLIST)
    let tqtElement = renderTQTLIST.map((TqtStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{TqtStudent.tqtName}</td>
                <td>{TqtStudent.tqtAge}</td>
                <td>{TqtStudent.tqtPhone}</td>
                <td>{TqtStudent.tqtEmail}</td>
                <td>{TqtStudent.tqtCreateAt}</td>
                <td>{TqtStudent.tqtStatus}</td>
                <td>{TqtStudent.Tqtid}</td>
              
            </tr>
        )

    });
    return (
        <div>
            <h2>Danh sach sinh vien</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ma sinh vien</th>
                        <th scope="col">Ho ten</th>
                        <th scope="col">Tuoi</th>
                        <th scope="col">Dien thoai</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trang thai</th>
                        <th scope="col">Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
        {tqtElement}
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
