import axios from '../Api/Tqt2Api';
import { useEffect, useState } from 'react'

export default function TqtAddorEdit({ onTqtClose, ontqtSubmit, renderUser }) {

    // console.log(renderUser);
    const [TqtMaSv, setTqtMaSv] = useState("");
    const [TqtHoSv, setTqtHoSv] = useState("");
    const [TqtTenSv, setTqtTenSv] = useState("");
    const [TqtPhai, setTqtPhai] = useState("");
    const [TqtNgaySinh, setTqtNgaySinh] = useState("");
    const [TqtNoiSinh, setTqtNoiSinh] = useState("");
    const [TqtMaKh, setTqtMaKh] = useState("");
    const [TqtHocBong, setTqtHocBong] = useState("");
    const [TqtDiemTb, setTqtDiemTb] = useState("");

    useEffect(() => {
        setTqtMaSv(renderUser.Masv)
        setTqtHoSv(renderUser.HoSv)
        setTqtTenSv(renderUser.Tensv)
        setTqtPhai(renderUser.Phai)
        setTqtNgaySinh(renderUser.Ngaysinh)
        setTqtNoiSinh(renderUser.Noisinh)
        setTqtMaKh(renderUser.MaKh)
        setTqtHocBong(renderUser.Hocbong)
        setTqtDiemTb(renderUser.Diemthi)
    }, [renderUser])

    const tqtClose = () => {
        onTqtClose(false);
    }

    const tqtSubmit = async (event) => {
        event.preventDefault();

        // console.log(tqtId, tqtUserName, tqtPass, tqtEmail, tqtphone);

        let tqtObjUser = {
            Masv: TqtMaSv,
            HoSv: TqtHoSv,
            Tensv: TqtTenSv,
            Phai: TqtPhai,
            Ngaysinh: TqtNgaySinh,
            Noisinh: TqtNoiSinh,
            MaKh: TqtMaKh,
            Hocbong: TqtHocBong,
            Diemthi: TqtDiemTb,
        };

        const response = await axios.post("SinhVien", tqtObjUser);
        console.log(response);

        ontqtSubmit(false)
    }
    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Masv
                    </span>
                    <input type="text" className="form-control"
                        name='Masv' value={TqtMaSv} onChange={(ev) => setTqtMaSv(ev.target.value)}
                        placeholder="Masv" aria-label="Masv" aria-describedby="Masv"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    HoSv
                    </span>
                    <input type="text" className="form-control"
                        name='HoSv' value={TqtHoSv} onChange={(ev) => setTqtHoSv(ev.target.value)}
                        placeholder="HoSv" aria-label="HoSv" aria-describedby="HoSv"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Tensv
                    </span>
                    <input type="text" className="form-control"
                        name='Tensv' value={TqtTenSv} onChange={(ev) => setTqtTenSv(ev.target.value)}
                        placeholder="Tensv" aria-label="Tensv" aria-describedby="Tensv"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Phai
                    </span>
                    <input type="text" className="form-control"
                        name='Phai' value={TqtPhai} onChange={(ev) => setTqtPhai(ev.target.value)}
                        placeholder="Phai" aria-label="Phai" aria-describedby="Phai"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Ngaysinh
                    </span>
                    <input type="text" className="form-control"
                        name='Ngaysinh' value={TqtNgaySinh} onChange={(ev) => setTqtNgaySinh(ev.target.value)}
                        placeholder="Ngaysinh" aria-label="Ngaysinh" aria-describedby="Ngaysinh"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Noisinh
                    </span>
                    <input type="text" className="form-control"
                        name='Noisinh' value={TqtNoiSinh} onChange={(ev) => setTqtNoiSinh(ev.target.value)}
                        placeholder="Noisinh" aria-label="Noisinh" aria-describedby="Noisinh"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    MaKh
                    </span>
                    <input type="text" className="form-control"
                        name='MaKh' value={TqtMaKh} onChange={(ev) => setTqtMaKh(ev.target.value)}
                        placeholder="MaKh" aria-label="MaKh" aria-describedby="MaKh"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Hocbong
                    </span>
                    <input type="text" className="form-control"
                        name='Hocbong' value={TqtHocBong} onChange={(ev) => setTqtHocBong(ev.target.value)}
                        placeholder="Hocbong" aria-label="Hocbong" aria-describedby="Hocbong"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Diemthi
                    </span>
                    <input type="text" className="form-control"
                        name='Diemthi' value={TqtDiemTb} onChange={(ev) => setTqtDiemTb(ev.target.value)}
                        placeholder="Diemthi" aria-label="Diemthi" aria-describedby="Diemthi"
                    />
                </div>
                <button className='btn btn-primary' name='TqtSave' onClick={(ev) => tqtSubmit(ev)}>Luu lai</button>
                <button className='btn btn-danger' onClick={tqtClose}>Dong lai</button>
            </form>
        </div>
    )
}