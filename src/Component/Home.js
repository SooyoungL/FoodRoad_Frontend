import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return(
    <div>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>3</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}