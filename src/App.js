import React, { useState } from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Blog from "./pages/blog/Blog";
import Blogpost from "./pages/blog/Blogpost";
import Nav from "./components/Nav";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
      <Nav isAuth={isAuthenticated} setAuthenticated = {toggleIsAuthenticated}/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login isAuth = {isAuthenticated} setAuthenticated = {toggleIsAuthenticated} />} />
              <Route path="/blogposts" element={isAuthenticated? <Blog/> : <Navigate to ="/login"/>}/>
              <Route path="/blogposts/:blogId" element={isAuthenticated? <Blogpost/> : <Navigate to ="/login"/>}/>
          </Routes>
      </>
  );
}

export default App;