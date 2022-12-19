import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chats";
import SetAvatar from './pages/SetAvatar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/setAvatar' element={<SetAvatar/>} />
        <Route path='/chat' element={<Chat/>} />
      </Routes>
    </Router>
  )
}
