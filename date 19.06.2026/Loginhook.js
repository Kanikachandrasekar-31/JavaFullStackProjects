/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginhook = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const myUser = "kanika";
  const mypassword = "123";

  const handleClick = (e) => {
    e.preventDefault();
    if (user === myUser && password === mypassword) {
      alert("Login Successfully");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
      <form 
        onSubmit={handleClick} 
        style={{
          backgroundColor: "#f1f5f9",
          padding: "40px",
          borderRadius: "12px",
          width: "350px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <h2 style={{ color: "#1d3557", marginBottom: "20px" }}>Login</h2>
        <input 
          type="text" 
          placeholder="UserName" 
          value={user} 
          onChange={(e) => setUser(e.target.value)} 
          style={inputStyle}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>

     //  button to go to signup page
        <button 
          type="button" 
          onClick={() => navigate("/signup")} 
          style={{ ...buttonStyle, background: "#1d3557", marginTop: "10px" }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  margin: "10px 0",
  padding: "10px",
  width: "90%",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  background: "#457b9d",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  width: "100%",
  marginTop: "15px"
};

export default Loginhook;*/
