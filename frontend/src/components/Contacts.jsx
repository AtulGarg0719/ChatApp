import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png"

export default function Contacts({contacts,currentUser}) {
    const [currentUserName,setCurrentUserName] = useState(undefined);
    const [currentUserImage,setCurrentUserImage] = useState(undefined);
    const [currentSelected,setCurrentSelected] = useState(undefined);
    useEffect(()=>{
        if(currentUser){
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    },[currentUser]);
    const changeCurrentChat = (index,contact) =>{}
  return (
    <>
      {
        currentUserImage && currentUserName &&(
            <Container>
                <div className="brand">
                    <img src={logo} alt="logo"/>
                    <h3>Atya Talks</h3>
                </div>
                <div className="contacts">
                    {
                        contacts.map((contact , index) =>{
                            return(
                                <div className={`contact ${index === currentSelected ? "selected" : ""}`} key = {index}>

                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        )
      }
    </>
  )
}
const Container = styled.div``;
