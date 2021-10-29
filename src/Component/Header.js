import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderSpace = styled.div`
  height: 100px;
  text-align: center;
  line-height: 100px;
`

const Title = styled.div`
  font-size: 75px;
  font-weight: 700;
  color: #532481;
  font-family: 'Bebas Neue', cursive;
`

export default function Header() {
  return(
    <HeaderSpace>
        <Link to="/" style={{ textDecoration: 'none' }}><Title>FoodRoad</Title></Link>
    </HeaderSpace>
  )
}