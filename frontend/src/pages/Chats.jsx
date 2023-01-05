import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Contacts from '../components/Contacts';
import {allUsersRoute , host} from '../utils/APIRoutes';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';
import {io} from 'socket.io-client';

function Chats() {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts,setContacts] = useState([]);
  const [currentUser,setCurrentUser] = useState(undefined);
  const [currentChat,setCurrentChat] = useState(undefined);
  const [isloading,setIsLoading] = useState(false);

  useEffect(() => {
    (async function() {
    if(!localStorage.getItem('chat-app-user')){
      navigate("/");
    }
    else{
      setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
      setIsLoading(true);
    }
  })();
  },[]);
  useEffect(()=>{
    if(currentUser){
      socket.current = io(host);
      socket.current.emit("add-user",currentUser._id);
    }
  },[currentUser])
  useEffect(()=>{
    (async function() {
    if(currentUser){
      if(currentUser.isAvatarImage){
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      }else{
        navigate("/setAvatar");
      }
    }
  })();
  },[currentUser]);
  const handelChatChange = (chat) =>{
    setCurrentChat(chat);

  }
  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={currentUser} changeChat = {handelChatChange}/>
        {isloading && currentChat === undefined ?
        (<Welcome currentUser={currentUser}/>) :
        (<ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket}/>)

        }
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
