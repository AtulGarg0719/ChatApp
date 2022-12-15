import React,{useState,useEffect} from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [values, setValues] = useState({
    username : "",
    email : "",
    password : "",
    confrmpassword : ""
  });
  const toastOptions = {
    position:"bottom-right",
    autoClose : 8000,
    pauseOnHover : true,
    draggable : true,
    theme : 'dark' ,
  };
  const handelSubmit = (event) =>{
    event.preventDefault();
   if(handelValidation()){
    alert('call');
   }
  }

  const handelValidation = () =>{
    const{username,email,password,confrmpassword} = values;
    if(password !== confrmpassword){
      toast.error("Password & Confirm Password should be same",toastOptions);
      return false;
    }
    else if(username.length < 4 ){
      toast.error("User Name should contain atleast 4 characters",toastOptions);
      return false;
    }
    else if(email === '' ){
      toast.error("Email should required",toastOptions);
      return false;
    }
    else if(password.length < 8){
      toast.error("Password should contain atleast 8 characters",toastOptions);
      return false;
    }
    return true;
  }

  const handelChange = (event) =>{
    setValues({...values,[event.target.name]: event.target.value});

  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handelSubmit(event)}>
          <div className="brand">
            <img src={logo} alt="Logo" />
            <h1>Atya Talks</h1>
          </div>
          <input type="text" name="username" placeholder='Enter Your Name' onChange={e=>handelChange(e)}/>
          <input type="email" name="email" placeholder='Enter Your Email' onChange={e=>handelChange(e)}/>
          <input type="password" name="password" placeholder='Enter Your Password' onChange={e=>handelChange(e)}/>
          <input type="password" name="confrmpassword" placeholder='Enter Your Confirm Password' onChange={e=>handelChange(e)}/>
          <button type='submit'>Create User</button>
          <span>Already have a account ? <Link to="/login">Login </Link> </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
height : 100vh;
width : 100vw;
display : flex;
flex-direction : column;
justify-content : center;
gap : 1rem;
background-color : #131324;
align-items :center;
.brand{
  display:flex;
  align-items :center;
  gap : 1rem;
  justify-content:center;
  img{
    height : 5rem;
  }
  h1{
    color:white;
    text-transform:uppercase;
  }
}
form{
  display : grid;
  flex-direction : column;
  gap:2rem;
  background-color : #00000076;
  border-radius : 2rem;
  padding : 3rem 5rem;
  input{
    background-color : transparent;
    padding : 1rem;
    border : 0.1rem solid #4e0eff; 
    border-radius : 0.4rem;
    color : white;
    width : 100%;
    font-size : 1rem;
    &:focus{
      border : 0.1rem solid #997af0;
      outline : none;
    }
  }
  button {
    background-color : #997af0;
    color : white;
    padding : 1rem 2rem ;
    border : none;
    font-weight : bold;
    cursor : pointer;
    border-radius : 0.4rem;
    font-size : 1rem;
    text-transform : uppercase;
    transition : 0.5s ease-in-out;
    &:hover{
      background-color : #4e0eff;
    }
  }
  span{
    color : white;
    text-transform : uppercase;
    a{
      color : #4e0eff;
      text-transform : none;
      text-decoration : none;
      font-weight : bold;
    }
  }

}

`;

export default Register
