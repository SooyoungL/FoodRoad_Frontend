import React from "react";
// import "./kakaomap.css";
import KakaoMap from "../Component/Map/KakaoMap";
import Header from '../Component/Header'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// const [checked, setChecked] = React.useState(['한식','중식']);
// let [markerdata, setMarkerData] = React.useState([]);

const MapPage = (props) => {
  let [markerdata, setMarkerData] = React.useState([]);
  return (
    <div className="mapPage">
        <Header />
        <KakaoMap data={markerdata}/>
    </div>
  );
}

export default (MapPage);