import React from 'react'
import styled from 'styled-components';
import video from "../../assets/vid.mp4"

const HomeScreen = () => {
  return (
    <div>
      <Contanier>
        <Main>
          <Comp>Word</Comp>
          <Video src ={video} loop muted autoPlay/>
          <Black/>
        </Main>
      </Contanier>
    </div>
  )
}

export default HomeScreen;
const Black = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);
`
const Comp = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;

`
const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`

const Contanier = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #fff4e5;
  /* padding-top: 100px; */
`
const Main = styled.div`
position: relative;
width: 100%;
height: 100%;
`
