import { Routes, NavLink, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import '../css/App.css';
import '../css/navbar.css';

import Home from '../pages/home/Home'

import Chat from "../pages/chat/Chat";


// commit
function NavRoute() {
  return (
    <div className="flexrow ">
<Navbar/>
<div className="appall flexrow w100">




<Routes>
<Route path="/" element={<Home/>} exact/>
<Route path="/*" element={<Home/>} exact/>

<Route path="/chat" element={<Chat/>} exact/>





{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}
</Routes>
   </div>
    </div>
  
  );
}

export default NavRoute;
