import React from 'react'

const LoginValidation = () => {
    const handleClick=()=>{
        let name=document.getElementById("userid").value;
        let password=document.getElementById("password").value;
        const sname="kani";
        const spassword="123";
          if(name===sname && password===spassword){
            alert("login Sucessfully");
    }
     else if(name != sname &&  password!=spassword){
            alert("enter valid name & password");

        }
         else if(name != sname){
            alert("enter valid name");
        }
        else{
            alert("enter valid password");
        }
    
    }
  return (
    <div>
       <center> <h1><i>FORM VALIDATION</i></h1></center>
        <form style={{backgroundColor:"lightblue",width:400,height:100,textAlign:"center",margin:"auto",marginTop:100,padding:40,borderRadius:80}}>
        <label ><i><b/>Enter UserName:</i></label>
        <input type="text" id="userid" placeholder='Username' />
        <br/>
        <label><i><b/>Enter password:</i></label>
        <input type="password" id="password" placeholder='Password' />
        <br/>
        <button  onClick={handleClick} style={{backgroundColor:"blue",borderRadius:8}}>Login</button>
        </form>
      
    </div>
  )
}

export default LoginValidation
