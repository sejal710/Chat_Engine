import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import Contact from "../component/Contact";
import Welcome from "../component/Welcome";
import ChatContainer from "../component/ChatContainer";
import { ToastContainer } from "react-toastify";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem("chat-app-current-user")) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem("chat-app-current-user")
        )
      );
    }
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(async () => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      } else {
        navigate("/setAvatar");
      }
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Container>
        <div className="container">
           <Contact contacts={contacts} changeChat={handleChatChange} />
         {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
        <ToastContainer />
      </Container>
    </>
  );
}


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 620px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
  @media screen and (max-width: 620px){
    width:100%;
    .container{
      width:98%;
      height:98%
      grid-template-columns: 25% 75%;
    }
  }
`;