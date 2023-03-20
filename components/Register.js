import React, { useState } from "react";
import './Register.css'

const Register = (props) => {
    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const [error, setError] = useState({
        perror: '',
        cerror: ''
    })
    const submitHandler = () => {
      localStorage.setItem('user', JSON.stringify(inputs));
        return ( alert("you have successfully signedup login now"))
    }
    const validate = (event) => {
        event.preventDefault();
        if (new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}/).test(inputs.password)) {
            if (inputs.password !== inputs.confirmpassword) {
            setError({ ...error, cerror: "passwords does not match" })
         }
            else {
            submitHandler();
            setError('')
            setInputs({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmpassword: ''
            })

        }
    }
}
    const onChange = (event) => {
        let name = event.target.name;
        let input = event.target.value;
        setInputs({
            ...inputs,
            [name]: input
        })
    }
    const onChangePassword = (event) => {
        setInputs({ ...inputs, password: event.target.value })
        if (!new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,14}/).test(inputs.password)) {
            setError({
                ...error, perror: "Password must contain atleast one digit , one lowercase letter, one uppercase letter, and it must be between 8-14 characters long."
            })
        }
        else {
            setError('')
        }
    }
    return (
        <>
            <div className="container">
                <h2>Signup</h2>
                <form onSubmit={validate}>
                    <div className="md-3">
                        <label htmlFor="fname" className="form-label">
                        {props.inputData[0].label}
                        </label>
                        <input
                            name={props.inputData[0].name}
                            type={props.inputData[0].type}
                            className= {props.inputData[0].className}
                            id= {props.inputData[0].id}
                            value={inputs.firstname}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="md-3">
                        <label htmlFor="lname" className="form-label">
                        {props.inputData[1].label}
                        </label>
                        <input
                           name={props.inputData[1].name}
                           type={props.inputData[1].type}
                           className= {props.inputData[1].className}
                           id= {props.inputData[1].id}
                            value={inputs.lastname}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="md-3">
                        <label htmlFor="InputEmail1" className="form-label">
                        {props.inputData[2].label}
                        </label>
                        <input
                              name={props.inputData[2].name}
                              type={props.inputData[2].type}
                              className= {props.inputData[2].className}
                              id= {props.inputData[2].id}
                            value={inputs.email}
                            onChange={onChange}
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
                            value={inputs.password}
                            onChange={onChangePassword}
                            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,14}"
                            maxLength={14}
                            minLength={8}
                            required
                        />
                    </div>
                    <p>{error.perror}</p>
                    <div className="md-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            {" "}
                            Confirm Password
                        </label>
                        <input
                         name={props.inputData[4].name}
                         type={props.inputData[4].type}
                         className= {props.inputData[4].className}
                         id= {props.inputData[4].id}
                            value={inputs.confirmpassword}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <p>{error.cerror}</p>
                    <button type="submit" className="btn btn-success" onClick={validate}>
                        Sign Up
                    </button>
                    <p id="p1">Already have an account?<a href="/login">Login here</a></p>
                </form>
            </div>
        </>
    );
}
export default Register;