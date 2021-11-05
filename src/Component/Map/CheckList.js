import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import axios from 'axios'

export default function CheckList(props) {
  const [checked, setChecked] = React.useState([]);
  const [subCategories, setSub] = React.useState([]);
  const [mainCategory, setMain] = React.useState('');
  React.useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    // mainCategory = params.get('param')
    setMain(params.get('param'))
    console.log('메인: ',params.get('param'))
    // getData(mainCategoroy);
    getSubCategory(params.get('param'));
    // setChecked(checkData);
  },[])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
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
              console.log(response)
          })
          .catch((error)=> {
              console.log(error);
          });
  }

  const getSubCategory = (c) => {
    axios.get("http://127.0.0.1:5000/foodroad", {
              params: {
                category:c 
                // sub_category: '서브카테고리'
              }      
          })
          .then((response)=> {
              setSub(response.data.sub_category);
          })
          .catch((error)=> {
              console.log(error);
          });
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
  );
}
