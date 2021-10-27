import React from "react";
import styled from 'styled-components';

const HeaderSpace = styled.div`
  height: 100px;
  text-align: center;
  line-height: 100px;
  margin-bottom: 25px;
`

const Title = styled.div`
  font-size: 55px;
  font-weight: 700;
  color: #532481;
  font-family: 'Bebas Neue', cursive;
`

export default function Header() {
  return(
    <HeaderSpace>
        <Title>FoodRoad</Title>
    </HeaderSpace>
  )
}