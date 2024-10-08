import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
    const navigate = useNavigate();
    const host = "http://localhost:4000";
    const [user , setUser] = useState({name:"",email:"",password:"",cpassword:""});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = user;
        // API CALL
        const response = await fetch(`${host}/api/auth/create-user`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ name,email,password}),
        });
        const json = await response.json();
        if(json.success){
            // save the user data in user table and redirect to home page 
            localStorage.setItem('token',json.authToken);
            navigate('/');
            props.showAlert("Account Created Successfully !!!","success");
        }else{
            props.showAlert("Invalid credentials !!!","danger");
        }
    } 
    const onChange = (e) => {
      setUser({...user , [e.target.name] : e.target.value});
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="text-center my-3">Register Page</h4>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input type="name" className="form-control" id="name" name="name" value={user.name} onChange={onChange} required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={onChange} required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="password" name="password" value={user.password} minLength={5} onChange={onChange} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="cpassword" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="cpassword" name="cpassword" value={user.cpassword} minLength={5} onChange={onChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
