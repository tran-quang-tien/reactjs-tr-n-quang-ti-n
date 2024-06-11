import React, { useEffect, useState } from 'react';

export default function TqtAddAndEdit({ tqtOnSubmit, tqtListudent, renderTqttask,rednerTqtAddandedit }) {
  const Tqttaskobj = {
    Tqt_id: 0,
    Tqt_name: '',
    Tqt_Age: '',
    Tqt_Phone: '',
    Tqt_Status: '',
  };

  const [Tqtstudent, setTqtStudent] = useState(renderTqttask);

  useEffect(() => {
    setTqtStudent(renderTqttask);
  }, [renderTqttask]);

  const tieude = rednerTqtAddandedit === true?"them moi task":"sua thong tin task"
  const tqtHandleChange = (tqtEvent) => {
    const { name, value } = tqtEvent.target;
    setTqtStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const change = (tqtEvent) => {
    tqtEvent.preventDefault();
    tqtOnSubmit(Tqtstudent);
  };

  return (
    <div>
      <h1>{tieude}</h1>
      <form>
        <div>
          <label>Id</label>
          <input name="Tqt_id" value={Tqtstudent.Tqt_id} onChange={tqtHandleChange} />
        </div>
        <div>
          <label>Name</label>
          <input name="Tqt_name" value={Tqtstudent.Tqt_name} onChange={tqtHandleChange} />
        </div>
        <div>
          <label>Age</label>
          <input name="Tqt_Age" value={Tqtstudent.Tqt_Age} onChange={tqtHandleChange} />
        </div>
        <div>
          <label>Phone</label>
          <input name="Tqt_Phone" value={Tqtstudent.Tqt_Phone} onChange={tqtHandleChange} />
        </div>
        <div>
          <label>Status</label>
          <select name="Tqt_Status" value={Tqtstudent.Tqt_Status} onChange={tqtHandleChange}>
            <option value="true">true</option>
            <option value="false">false</option>
            
          </select>
        </div>
        <button onClick={change}>Lưu lại</button>
      </form>
    </div>
  );
}