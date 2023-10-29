import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <div>
      <Container>
       <Main>
        <Logo>Codelab</Logo>
        
        <NavLink to="/register" >
          <Button>Get Started</Button>
        </NavLink>
       </Main>
      </Container>
    </div>
  )
}

export default Head;
const Button = styled.div`
text-decoration: none;
border-radius: 30px;
padding: 10px 32px;
background-color: #fff4e5;
border: 1px solid darkorange;
transition: all 360ms;

&:hover{
  background-color: white;
  cursor: pointer;
}
`
const Logo = styled.div`
width: 70px;
&:hover{
  background-color: white;
  cursor: pointer;
}

`
const Main = styled.div`
  height: 100%;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 24px 0px,
  rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: white;

  border-radius: 300px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`

const Container= styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  position: fixed;
  z-index: 1;
`
