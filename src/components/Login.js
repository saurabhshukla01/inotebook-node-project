import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const host = "http://localhost:4000";
    const [credentials , setCredentials] = useState({email:"",password:""});
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API CALL
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ email:credentials.email, password:credentials.password}),
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // save the authToken & redirect 
            localStorage.setItem('token',json.authToken);
            navigate('/');
        }else{
            alert("invalid credentials !!!");
        }
    } 
    const onChange = (e) => {
        setCredentials({...credentials , [e.target.name] : e.target.value});
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="text-center my-3">Login Page</h4>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
