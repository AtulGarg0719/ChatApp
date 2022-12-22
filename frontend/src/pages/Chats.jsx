import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import Contacts from '../components/Contacts';
import { allUsersRoute } from '../utils/APIRoutes';
function Chats() {
  const navigate = useNavigate();
  const [contacts,setContacts] = useState([]);
  const [currentUser,setcurrentUser] = useState([]);
  useEffect(async() => {
    if(!localStorage.getItem('chat-app-user')){
      navigate("/");
    }
    else{
      setcurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")))
    }
  },[]);
  useEffect(async()=>{
    if(currentUser){
      if(currentUser.isAvatarImage){
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      }else{
        navigate("/setAvatar");
      }
    }

  },[setcurrentUser])
  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={currentUser}/>
      </div>
    </Container>
  )
}

const Container = styled.div`
height : 100vh;
width : 100vw;
display : flex;
flex-direction : column;
justify-content : center;
gap : 1rem;
background-color : #131324;
align-items :center;
.container{
  height : 85vh;
  width : 85vw;
  background-color: #00000076;
  display: grid;
  grid-template-columns: 25% 75%;
  @media screen and (min-width:720px) and (max-width:1080px){
    grid-template-columns: 35% 65%;
  }
}

`;
export default Chats
