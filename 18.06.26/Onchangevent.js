import React from 'react'

export const Onchangevent = () => {
    const handlechange=(e)=>{
        // let a=document.getElementById("res").value;
        document.getElementById("res").textContent=e.target.value;
    }
  return (
    <div>
        input:<input type="text" onChange={handlechange}></input>
        <h3 id="res"></h3>
      
    </div>
  )
}


