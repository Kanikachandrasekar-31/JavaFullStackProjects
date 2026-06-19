import React,{useState} from 'react'

const CounterClock = () => {
    const [count,setCount]=useState(0);
    
  return (
    <div style={{textAlign:"center",marginTop:"50px",backgroundColor:"lightgray",BorderRadius:"8px",width:"300px",height:"200px",padding:"20px",margin:"100px"}}>
        <h1><i>Counter Clock🕒</i></h1>
        <br></br>
        <button onClick={()=>setCount(count+1)}>add</button>
        <button onClick={()=>setCount(count-1)}>sub</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <h2>{count}</h2>
      
    </div>
  )
}

export default CounterClock

