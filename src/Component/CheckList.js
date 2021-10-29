// ['한식', '양식', '중식', '일식', '아시아음식', '간식', '뷔페', '술집']
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
  const [checked, setChecked] = React.useState(['한식','중식']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const changeRes = (resData) => {
      props.changeData(resData);
    }
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // Update the checked state
    setChecked(newChecked);

    // convert array to String
    let checkedRes = newChecked.join(',');
    
    axios.get("http://192.168.1.93:5000/foodroad", {
              params: {
                category: checkedRes
              }      
          })
          .then((response)=> {
              changeRes(response.data)
          })
          .catch((error)=> {
              console.log(error);
          })
    };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {['한식', '양식', '중식', '일식', '아시아음식', '간식', '뷔페', '술집'].map((value) => {
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
