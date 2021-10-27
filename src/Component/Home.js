import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import c_styled from 'styled-components';

const Item = styled(Paper)(({ theme, img }) => ({
  '&':{
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 150,
    position: 'relative',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  '&:before':{
    content: '""',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
  },
}));

const CategoryList = [
  {
    title: "한식",
    imgSrc: "https://www.chf.or.kr/jnrepo/namo/img/images/000005/20210119182559666_QHTTNT8F.jpg"
  },
  {
    title: "양식",
    imgSrc: "https://tumblbug-pci.imgix.net/690c9f262a25131d07655e5589af183e6e51bf02/93d2e60994896de33988566c520d23d19059f7eb/d3c5acc9e6e0ddcd0fa592689dc888b7e4092a6d/3c72c926-b59d-4036-8acc-cbc5c2e067ed.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=cd5b8db1ba70f9708fcea023c4998023"
  },
  {
    title: "중식",
    imgSrc: "https://ww.namu.la/s/d4c53737b61fec8cf0fa02206d85a5022fc5465593f2e0190648f7c5911acd836a5f7a1db0f19f0136ec1c178d782465a9455b31d178b79df5133fc6b493a41f6acde683b0a01c418bd30dfe56c67705"
  },
  {
    title: "일식",
    imgSrc: "https://static.hubzum.zumst.com/hubzum/2018/08/02/13/a2da0a701a30422695e1d117deaa67a4_780x0c.jpg"
  },
  {
    title: "아시안 음식",
    imgSrc: "https://t1.daumcdn.net/cfile/tistory/991F28465C3887B62A"
  },
  {
    title: "간식",
    imgSrc: "http://cdn.topdigital.com.au/news/photo/201906/img_7899_0.jpg"
  },
  {
    title: "뷔페",
    imgSrc: "http://res.heraldm.com/content/image/2021/05/13/20210513000020_0.jpg"
  },
  {
    title: "술집",
    imgSrc: "https://cdn.mindgil.com/news/photo/202008/69676_4067_1639.jpg"
  }
]

const CategoryTttle = c_styled.div`
  color: #fff;
  text-align: center;
  line-height: 155px;  
  position: relative;
`

const Category = c_styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`

export default function Home() {
  return(
    <Category>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 7}}>
          {CategoryList.map((obj) => {
            return (
              <Grid item xs ={3}>
                <Item img={obj.imgSrc}><CategoryTttle>{obj.title}</CategoryTttle></Item>
              </Grid>
            ) 
          })}
        </Grid>
      </Box>
    </Category>
  );
}