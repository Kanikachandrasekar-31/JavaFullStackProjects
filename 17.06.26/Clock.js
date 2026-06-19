import React from 'react'

const Clock = () => {
    var n =0;
    function plus(){
        let msg=document.getElementById("res");
        msg.textContent=n+1;
        n=n+1;
       

    }
    function minus(){
        let msg=document.getElementById("res");
       msg.textContent=n-1;
       n=n-1;
       

    }
  return (
    
    <div>
       
       <h1><i>Stop Watch🕒</i></h1>
       <br></br>
        <button onClick={plus}>+</button>
       
        <button onClick={minus}>-</button>
        <p id="res">0</p>
        
        
      
    </div>
   
  )
}

export default Clock
