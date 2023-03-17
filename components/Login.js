import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [color, setColor] = useState("btn1");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [perror, setPError] = useState("");
  const [cperror, setCPError] = useState("");

  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function passwordHandler(event) {
    setPassword(event.target.value);
  }
  function cpasswordHandler(event) {
    setCpassword(event.target.value);
  }

  function changeColor() {
    setColor("btn2");
  }
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const errorPass = (value) => {
    if (
      !new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}/).test(value)
    ) {
      setPError("");
    } else {
      setPError(
        "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, and it must be 8-14 characters long."
      );
    }
  };

  const errorCPass = () => {
    const sub = {
      email: email,
      password: password,
      confirmPassword: cpassword,
      perror: perror,
      cperror: cperror,
    };
    console.log(sub);
    if (sub.password !== sub.confirmPassword) {
      setCPError("password does not match");
    } else {
      setCPError("");
    }
  };
  const errorHandler = () => {
    errorPass();
    errorCPass();
    setEmail("");
    setCpassword("");
    setPassword("");
    changeColor();
  };
  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="md-3">
            <label htmlFor="InputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="InputEmail1"
              value={email}
              onChange={emailHandler}
              required
            />
          </div>
          <div className="md-3">
            <label htmlFor="InputPassword1" className="form-label">
              {" "}
              Enter Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="InputPassword"
              value={password}
              onChange={passwordHandler}
              pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])"
              required
            />
          </div>
          <p>{perror}</p>
          <div className="md-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              {" "}
              Confirm Password
            </label>
            <input
              name="cpass"
              type="password"
              className="form-control"
              id="InputPassword1"
              value={cpassword}
              onChange={cpasswordHandler}
              required
            />
          </div>
          <p>{cperror}</p>
          <br></br>
          <button type="submit" className={color} onClick={errorHandler}> 
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
