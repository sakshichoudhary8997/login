import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [error,setError] =useState('')

    const submitHandler = (event) => {
        event.preventDefault();
        const loggeduser= JSON.parse(localStorage.getItem("user"))
        if(data.email===loggeduser.email && data.password===loggeduser.password){
            navigate("/")
        }
        else{
            setError("incorrect E-mail id or password")
        }
        const sub = {
            email: data.email,
            password: data.password,
            
        } ;
        console.log(sub);
    }
    
    const dataHandler =(event)=>{
        let name = event.target.name;
        let input = event.target.value;
  
        setData({
            ...data,
            [name]: input,
        });
    }
    return (
        <>
            <div className="container1">
                <h2>Login</h2>
                <form onSubmit={submitHandler}>
                    <div className="md-3">
                        <label htmlFor="InputEmail1" className="form-label">
                        {props.inputData[2].label}
                        </label>
                        <input
                           name={props.inputData[2].name}
                           type={props.inputData[2].type}
                           className= {props.inputData[2].className}
                           id= {props.inputData[2].id}
                            value={data.email}
                            onChange={dataHandler}
                            required
                        />
                    </div>
                    <div className="md-3">
                        <label htmlFor="InputPassword1" className="form-label">
                            {" "}
                            {props.inputData[3].label}
                        </label>
                        <input
                           name={props.inputData[3].name}
                           type={props.inputData[3].type}
                           className= {props.inputData[3].className}
                           id= {props.inputData[3].id}
                            value={data.password}
                            onChange={dataHandler}
                            required
                        />
                    </div>
                    <p>{error}</p>
                    <button type="submit" className="btn btn-primary" onClick={dataHandler}>
                        Login
                    </button>
                    <p id="p1">Don't have an account?<a href="/register">Signup here</a></p>
                </form>
            </div>
        </>
    );
}

export default Login;