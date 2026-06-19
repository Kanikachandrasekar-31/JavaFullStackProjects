import React,{useState} from 'react'

const Tables = () => {
    const [msg,setMsg]=useState("");
    const [number,setNumber]=useState("");
    function handleClick(){
        fetch("http://localhost:9090/tables/" + number)
        .then((res)=>res.text())
        .then((data)=>setMsg(data))

    }
  return (
    
    <div>
        <center>
        <h1>Tables</h1>
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button onClick={handleClick}>Multi_Tables</button>
        <p style={{whiteSpace:"pre-line"}}><b>5 th Table:</b>{"\n"}{msg}</p>
        </center>
      
    </div>
  )
}

export default Tables
