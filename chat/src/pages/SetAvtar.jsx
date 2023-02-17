import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import loader from '../assets/loader.gif';
import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { setAvtarRoute } from '../utils/APIRoutes';

export default function SetAvtar() {
  const api = `https://api.multiavatar.com/4645646`;

  
  return (
    <div>SetAvtar</div>
  )
}
