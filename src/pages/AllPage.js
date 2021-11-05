import React, { useEffect, useState } from "react";
// import "./kakaomap.css";
import KakaoMap from "../Component/Map/KakaoMap";
import Header from '../Component/Header'
import axios from 'axios'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const AllPage = () => {
  const [markerdata, setMarkerData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      
      await axios.get("http://127.0.0.1:5000/all")
          .then((response)=> {
            console.log(response.data)
            setMarkerData(response.data);
          })
          .catch((error)=> {
              console.log(error);
          });
    }

    fetchData();
    
  },[])

  return (
    <div className="kakaomap">
        <Header />
        <Item><KakaoMap data={markerdata}/></Item>
    </div>
  );
}

export default (AllPage);