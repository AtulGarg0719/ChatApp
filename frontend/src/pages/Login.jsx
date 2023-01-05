import React,{useState,useEffect} from 'react';
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';

function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username : "",
    password : "",
  });
  const toastOptions = {
    position:"bottom-right",
    autoClose : 8000,
    pauseOnHover : true,
    draggable : true,
    theme : 'dark' ,
  };
  // Local Stroage is at application section in inspect
  useEffect(() => {
    if(localStorage.getItem('chat-app-user')){
      navigate("/chat");
    }
  },[]);
  const handelSubmit = async(event) =>{
    event.preventDefault();
   if(handelValidation()){
    const{username,password} = values;
    const {data} = await axios.post(loginRoute,{
      username,password
    });
    if(data.status === false){
      toast.error(data.msg,toastOptions)
    }
    if(data.status === true){
      localStorage.setItem("chat-app-user",JSON.stringify(data.user));
    navigate("/chat");

    }
   }
  }

  const handelValidation = () =>{
    const{username,password} = values;
    
    if(username.length === '' ){
      toast.error("User Name should required",toastOptions);
      return false;
    }
    else if(password.length === ''){
      toast.error("Password should required",toastOptions);
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
          <input type="text" name="username" placeholder='Enter Your Username' onChange={e=>handelChange(e)} min = "4"/>
          <input type="password" name="password" placeholder='Enter Your Password' onChange={e=>handelChange(e)}/>
          <button type='submit'>Login User</button>
          <span>Don't have an account ? <Link to="/register">Register</Link> </span>
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

export default Login
