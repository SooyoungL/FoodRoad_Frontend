// import React, { useState } from "react";
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import c_styled from 'styled-components';
// import Button from '@mui/material/Button';
// import { purple } from '@mui/material/colors';
// import { CategoryList } from "../data/CategoryData";
// import { useHistory } from 'react-router-dom';

// const Item = styled(Paper)(({ theme, img, checked }) => ({
//   '&':{
//     padding: theme.spacing(1),
//     fontSize: 'x-large',
//     fontWeight: 'bold',
//     height: 150,
//     position: 'relative',
//     backgroundImage: `url(${img})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     border: checked ? '4px solid #632f96' : 'none',
//   },
//   '&:before':{
//     content: '""',
//     opacity: checked ? 0 : 0.5,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#000',
//   },
//   '&:hover':{
//     fontSize: checked ? 'x-large' : 0,
//     lineHeight: 0,
//   },
//   '&:hover:before':{
//     opacity: 0,
//   },
// }));

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: '#532481',
//   padding: '7px 30px',
//   float: 'right',
//   '&:hover': {
//     backgroundColor: '#632f96',
//   },
// }));

// const CategoryTtile = c_styled.div`
//   color: #fff;
//   text-align: center;
//   line-height: 155px;  
//   position: relative;
// `

// const Category = c_styled.div`
//   margin: 0 auto;
//   width: 80%;
// `

// export default function Home() {

//   const [categoryList, setCategoryList] = useState("");
//   const [isCategoryClicked, setIsCategoryClicked] = useState({
//     arrayCheck: Array(CategoryList.length).fill(false),
//   });
//   const history = useHistory();

//   const clickItem = (category, idx) => {
//     if(categoryList.indexOf(category) === -1){
//       const checked = true
//       category += ",";
//       setCategoryList(categoryList + category);
//       setIsCategoryClicked(state => ({
//         ...state,
//         arrayCheck: [
//           ...state.arrayCheck.slice(0, idx),
//           checked,
//           ...state.arrayCheck.slice(idx + 1)
//         ]
//       }));
//     }else{
//       const checked = false
//       category += ",";
//       const cList = categoryList.replace(category, "");
//       setCategoryList(cList);
//       setIsCategoryClicked(state => ({
//         ...state,
//         arrayCheck: [
//           ...state.arrayCheck.slice(0, idx),
//           checked,
//           ...state.arrayCheck.slice(idx + 1)
//         ]
//       }));
//     }
//   }
 
//   const clickMap = () => {
//     if(categoryList === ""){
//       alert("하나 이상의 카테고리를 선택해주세요");
//     }
//     else{
//       history.push('/map?param=' + categoryList);
//     }
//   }

//   return(
//     <Category>
//       <Box sx={{ width: '100%' }}>
//         <ColorButton variant="contained" onClick={clickMap}>지도보기</ColorButton>
//         <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 7}}>
//           {CategoryList.map((obj, index) => {
//             return (
//               <Grid item xs ={3} key={index}>
//                 <Item img={obj.imgSrc} onClick={() => {clickItem(obj.title, index)}} checked={isCategoryClicked.arrayCheck[index]}>
//                   <CategoryTtile>{obj.title}</CategoryTtile>
//                 </Item>
//               </Grid>
//             ) 
//           })}
//         </Grid> 
//       </Box>
//     </Category>
//   );
// }