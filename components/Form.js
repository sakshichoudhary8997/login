import React from 'react'

export const Form = () => {
 const[value,setValues]=useState({
email:'',
password:'',
cpassword:''
 })
 const[error,setErors]=useState({})

 const cHandler=()=>{
    setValues({
        ...value, email:event.target.value,
    }

    )
 }
 return(
    value,
    error

 )
}
export default Form;