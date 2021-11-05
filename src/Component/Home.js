import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import c_styled from 'styled-components';
import { CategoryList } from "../data/CategoryData";
import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme, img, logo }) => ({
  '&':{
    padding: theme.spacing(1),
    fontSize: 'x-large',
    fontWeight: 'bold',
    height: '100%',
    position: 'relative',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  '&:before':{
    content: '""',
    opacity: logo ? 0 : 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
  },
  '&:hover':{
    fontSize: 0,
    lineHeight: 0,
  },
  '&:hover:before':{
    opacity: 0,
  },
}));

const CategoryTtile = c_styled.div`
  color: #fff;
  text-align: center;
  line-height: 230px;  
  position: relative;
`

const Category = c_styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
`

export default function Home() {
  
  const history = useHistory();

  const clickItem = (category) => {
    if(category === '전체'){
      history.push('/all');
    }
    else{
      history.push('/map?param=' + category);
    } 
  }

  return(
    <Category>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1}}>
          {CategoryList.map((obj, index) => {
            return (
              <Grid item xs ={3} key={index}>
                <Item img={obj.imgSrc} onClick={() => {clickItem(obj.title)}} logo={false} >
                  <CategoryTtile>{obj.title}</CategoryTtile>
                </Item>
              </Grid>
            ) 
          })}
          <Grid item xs ={3}>
                <Item img={'img/OJM_Mark.png'} logo={true}></Item>
              </Grid>
        </Grid> 
      </Box>
    </Category>
  );
}