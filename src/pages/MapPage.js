import React from "react";
// import "./kakaomap.css";
import KakaoMap from "../Component/Map/KakaoMap";
import Header from '../Component/Header'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CheckList from "../Component/CheckList";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MapPage() {
  return (
    <div className="mapPage">
        <Header />
        <div class>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Item><KakaoMap /></Item>
            </Grid>
            <Grid item xs={3}>
              <Item><CheckList /></Item>
            </Grid>
          </Grid>
        </div>
    </div>
  );
}