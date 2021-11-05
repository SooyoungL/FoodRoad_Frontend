import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import axios from 'axios'
import Loader from '../Loader';
import styled from 'styled-components';

const CategoryName = styled.div`
  font-size: x-large;
`

const CategoryList = styled.div`
  overflow: scroll;
  height: 1135px;
`

export default function CheckList(props) {
  const [checked, setChecked] = React.useState([]);
  const [subCategories, setSub] = React.useState([]);
  const [mainCategory, setMain] = React.useState('');
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {

    let search = window.location.search;
    let params = new URLSearchParams(search);

    setMain(params.get('param'));
    getSubCategory(params.get('param'));

  },[])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      if(newChecked.length < 2){
        alert('1개 이상의 카테고리를 선택해주세요.');
      }else{
        newChecked.splice(currentIndex, 1);
      }
    }
    // Update the checked state
    setChecked(newChecked);

    // convert array to String
    let checkedRes = newChecked.join(',');
    getData(mainCategory, checkedRes);

  };
  
  const changeRes = (resData) => {
    props.changeData(resData);
  }

  const getData = (mainCategory, checkedRes) =>{
    axios.get("http://127.0.0.1:5000/foodroad", {
              params: {
                category: mainCategory,
                sub_category: checkedRes
              }      
          })
          .then((response)=> {
              changeRes(response.data);
          })
          .catch((error)=> {
              console.log(error);
          });
  }

  const getSubCategory = async (c) => {

    setLoading(true);

    await axios.get("http://127.0.0.1:5000/foodroad", {
              params: {
                category:c 
              }      
          })
          .then((response)=> {
              setSub(response.data.sub_category);
              setChecked(response.data.sub_category);
              let subC = response.data.sub_category.join(',');
              axios.get("http://127.0.0.1:5000/foodroad", {
                    params: {
                      category:c ,
                      sub_category: subC
                    }      
                })
                .then((response)=> {
                    props.changeData(response.data);
                })
                .catch((error)=> {
                    console.log(error);
                });
          })
          .catch((error)=> {
              console.log(error);
          });

    setLoading(false);
  }

  if (loading) return <Loader type="spin" color="RGB 값" message={'로딩중'} />;

  return (
    <CategoryList>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <CategoryName>{mainCategory}</CategoryName>
        {subCategories.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </CategoryList>
  );
}
