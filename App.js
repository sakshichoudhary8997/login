import './App.css';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './components/Register';
import Home from './Home';

function App() {
   const inputData =[
    {
      name:"firstname",
      label:"First Name",
      type:"text",
      className:"form-control",
      id:"exampletext",
      required:true 
    },
    { 
      name:"lastname",
      label:"Last Name",
    type:"text",
    className:"form-control",
    id:"exampletext1",
    required:true 
  },
    { 
      name:"email",
      label:"Email adress",
    type:"email",
    className:"form-control",
    id:"emailid",
    required:true
  },
  {
    name:"password",
    label:"Enter New Password",
    type:"password",
    className:"form-control",
    id:"password",
    required:true 
  },
  {
    name:"confirmpassword",
    label:"Confirm Password",
    type:"password",
    className:"form-control",
    id:"cpassword",
    required:true 
  }
   ]
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Home />} />
      <Route path="/login" element ={<Login inputData={inputData}/>} />
      <Route path="/register" element ={<Register inputData={inputData}/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
 
}

export default App;