import React,{useEffect,useState} from 'react'

const UseEffect = () => {
    const [message,setMessage]=useState("Loding....");
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setMessage("Hello,this is useEffect in action!!");},4000);//wait for 4 seconds
            return()=>clearTimeout(timer); //clearup
    },[]);
  return (
   
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>{message}</h1>
        </div>
      
   
  )
}

export default UseEffect
