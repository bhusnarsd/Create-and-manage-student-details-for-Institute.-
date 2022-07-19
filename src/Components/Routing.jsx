import React from 'react'
import {Routes, Route} from "react-router-dom";
import Educationdetails from './Educationdetails';
import Project from "./Project";
import Intern from "./Intern";
import Login from "./Login";
import Personaldetails from './Personaldetails';
import Signup from './Signup';
import User from './User';
import Admin from './Admin';
import FullDetails from './FullDetails';
import Link from './Link';
import Note from './Note';
import Studentdetails from './Studentdetails';
import ThankYou from './ThankYou';


 const Routing = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/thankyou" element={<ThankYou/>}></Route>
        <Route exact path="/studentdetails/:userID" element={<Studentdetails/>}></Route>
        <Route exact path="/fulldetails/:userID" element={<FullDetails/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/user/:userID" element={<User/>}></Route>
        <Route exact path="/admin" element={<Admin/>}></Route>
        <Route exact path="/note/:userID" element={<Note/>}></Route>
        <Route exact path="/link/:userID" element={<Link/>}></Route>
        <Route exact path="/personaldetails/:userID" element={<Personaldetails/>}></Route>
        <Route exact path="/project/:userID" element={<Project/>}></Route>
        <Route exact path="/educationdetails/:userID" element={<Educationdetails/>}></Route>
        <Route exact path='/intern/:userID' element={<Intern/>}></Route>
        



    </Routes>
    
    
    
    </>
  )
}
export default Routing;
