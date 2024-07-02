import axios from '../Api/TqtApi';
import React, {  useEffect, useState } from 'react'

export default function TqtAddorEdit({onTqtClose,ontqtSubmit,renderUser}) {

    console.log(renderUser);
    const[tqtId,setTqtId] = useState("");
    const[tqtUserName,setTqtUserName] = useState("");
    const[tqtPass,setTqtPass] = useState("");
    const[tqtEmail,setTqtEmail] = useState("");
    const[tqtphone,setTqtphone] = useState("");
   
   
   useEffect(()=>{
    setTqtId(renderUser.id)
    setTqtUserName(renderUser.UserName)
    setTqtPass(renderUser.Pass)
    setTqtphone(renderUser.email)
    setTqtEmail(renderUser.phone)
   },[renderUser])


    const tqtClose =()=>{
    onTqtClose(false);

   } 

   const tqtSubmit= async (event)=>{
    event.preventDefault();
    console.log(tqtId,tqtUserName,tqtPass,tqtEmail,tqtphone);
   let tqtObjUser ={
    UserName: tqtUserName,
    Pass: tqtPass,
    email: tqtEmail,
    phone: tqtphone,
    id: tqtId
   }
   const response = await axios.post("https://667cdf2f3c30891b865e0097.mockapi.io/API/Tqtv1/TqtLesson10",tqtObjUser);

    
   ontqtSubmit(false)
    }
    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        id
                    </span>
                    <input type="text" className="form-control"
                        name='id'value={tqtId} onChange={(ev)=>setTqtId(ev.target.value)}
                        placeholder="id" aria-label="id" aria-describedby="id"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        UserName
                    </span>
                    <input type="text" className="form-control"
                        name='UserName'value={tqtUserName} onChange={(ev)=>setTqtUserName(ev.target.value)}
                        placeholder="UserName" aria-label="UserName" aria-describedby="UserName"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        Pass
                    </span>
                    <input type="text" className="form-control"
                        name='Pass'value={tqtPass} onChange={(ev)=>setTqtPass(ev.target.value)}
                        placeholder="Pass" aria-label="Pass" aria-describedby="Pass"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        Email
                    </span>
                    <input type="text" className="form-control"
                        name='Email'value={tqtEmail} onChange={(ev)=>setTqtEmail(ev.target.value)}
                        placeholder="Email" aria-label="Email" aria-describedby="Email"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        Phone
                    </span>
                    <input type="text" className="form-control"
                        name='Phone'value={tqtphone} onChange={(ev)=>setTqtphone(ev.target.value)}
                        placeholder="Phone" aria-label="Phone" aria-describedby="Phone"
                    />
                </div>
                <button className='btn btn-primary' name='TqtSave'onClick={(ev)=>tqtSubmit(ev)}>Luu lai</button>
                <button className='btn btn-danger' onClick={tqtClose}>Dong lai</button>
            </form>
        </div>
    )
}

