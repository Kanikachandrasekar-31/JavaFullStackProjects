import React,{useEffect,useState} from 'react'

const DependancyArray = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Count changed to:",count);
        alert("Count changed to:"+count);
    },
    //[]
    [count]
);
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
       
      
    </div>
  )
}

export default DependancyArray
