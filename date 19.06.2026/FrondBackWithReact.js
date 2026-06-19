import React,{useState} from 'react'

const FrondBackWithReact = () => {
    const [msg,setMsg]=useState("");
    function getMessage(){
        fetch("http://localhost:9090/hello")
        .then((res)=>res.text())
        .then((data)=>setMsg(data));
    }
  return (
    <div style={{textAlign:"center",marginTop:"40px"}}>
        <h1>THIS PAGE FOR FRONTEND</h1>
        <button onClick={getMessage}>click</button>
        <h3><i>Message from backend:{msg}</i></h3>
      
    </div>
  )
}

export default FrondBackWithReact
