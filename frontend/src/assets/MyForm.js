// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [summary, setsummary] = useState("");
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         navigate('/')
    //     }
    // }, [])

    const collectData = async () => {
        console.warn(name, email, summary);
        let result = await fetch("http://localhost:5000/form", {
            method: 'post',
            body: JSON.stringify({ name, email, summary }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
       console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
      
            setName("");
            setEmail("");
            setsummary("");
           
             
        
       
        // navigate('/')
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
                value={name || ""} onChange={(e) => setName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Email"
                value={email || ""} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter summary"
                value={summary || ""} onChange={(e) => setsummary(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">Submit</button>
        </div>
    )
}
export default MyForm