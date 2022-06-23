import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import '../CSS/HomePage.css';
import logo from '../Icons/logo.png';
import home from '../Icons/home.png';

function Login() {
   

    return (
       <div>
<nav class="navbar">
       
        <div class="logo"><img src={logo} width="95" height="95"/></div>
        <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class="menu">
            <li>
                <a href="C:\Users\ataas\source\repos\Contact.html">اتصل بنا</a>
            </li>
            <li>
            <Link to="/HomePage/Pictures" style={{ textDecoration: 'none'}}>المعرض</Link>
            </li>
            <li>
            <Link to="/HomePage/WhoAreWe" style={{ textDecoration: 'none'}}>من نحن؟</Link>
            </li>
            <li>
            <Link to="/HomePage" style={{ textDecoration: 'none'}}>الصفحة الرئيسية</Link>
            </li>
            </div>
        </ul>

    </nav>
    <div class="background1"> <img src={home} width="100%"/></div>

       </div>
  );
}

export default Login;