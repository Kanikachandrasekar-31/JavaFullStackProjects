import React, { useState } from 'react';

const Signinhook = () => {
  const [name, setName] = useState("");
  const [ph, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [pswd, setPswd] = useState("");
  const [cpswd, setCpswd] = useState("");
  const [date, setDate] = useState("");

  const handleclick = () => {
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&]{8,15}$/;
    if (!name || !email || !username || !pswd || !cpswd || !date) {
      alert("Please fill all fields");
    } else if (!passwordPattern.test(pswd)) {
      alert("Password must be 8-15 characters long and contain at least one number and one special character");
    } else if (pswd !== cpswd) {
      alert("Passwords do not match");
    } else {
      alert("Completed Sign Up");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
      <form 
        style={{
          backgroundColor: "#f1f5f9",
          padding: "40px",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <h2 style={{ color: "#1d3557", marginBottom: "20px" }}>Sign Up</h2>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
        <input type="number" placeholder="Enter Phone number" value={ph} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
        <input type="email" placeholder="Enter email id" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Enter UserName" value={username} onChange={(e) => setUserName(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Enter Password" value={pswd} onChange={(e) => setPswd(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Enter Confirm Password" value={cpswd} onChange={(e) => setCpswd(e.target.value)} style={inputStyle} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} />
        <button type="button" onClick={handleclick} style={buttonStyle}>Sign Up</button>
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

export default Signinhook;
