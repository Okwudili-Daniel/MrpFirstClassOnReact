import React, { useState } from 'react'
import styled from 'styled-components';
import {AiOutlineHeart, AiOutlineClockCircle} from "react-icons/ai"
import img from "../../assets/code.png"

const MainCard = () => {

    const [state, setState] =useState<number>(0) 

    const Count = () =>{
        setState((el) =>{
            return el +1
        })
    }

  return (
    <div>
      <Container>
        <Card>
            <Top>
                <Image src={img}/>
                <Favourite onClick={Count}>
                    <Heart/>
                </Favourite>
            <Stack>Project Management</Stack>
            </Top>
            <Div>Okwudili Daniel</Div>

            <Title>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic autem, architecto officia quia repudiandae impedit ipsam assumenda corporis eius aperiam.
            </Title>
            <Time>
               <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                  <Icon/>
               <Text> 4 Days ago</Text>
               </div>

               <div style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
                <Heart sign="red"/>
                <Ago>{state}</Ago>
               </div>
            </Time>
        </Card>
      </Container>
    </div>
  )
}

export default MainCard;
const Title = styled.div``
const Ago = styled.div``
const Text= styled.div`
margin-left: 5px;
`
const Icon = styled(AiOutlineClockCircle)`
color: darkorange;
font-size: 20px;
font-weight: bold;
margin-top: 5px;
`
const Time = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #fff4e5;
margin-left: 10px;
padding : 0 10px;
`
const Div = styled.div`
margin: 30px 10px;
font-weight: bold;
`
const Heart = styled(AiOutlineHeart)<{sign: string}>`
color: ${({sign}) => sign};
transition: all 360ms;

&:hover{
    color: red;
    cursor: pointer;
}
`
const Stack = styled.div`
font-size: 12px;
background-color: darkorange;
color: white;
height: 40px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 0px 0px;
position: absolute;
bottom: -20px;
left: 10px;
border-radius: 2px;
`
const Favourite = styled.div`
 position: absolute;
 top: 10px;
 right: 10px;

 width: 30px;
 height: 30px;
 background-color: rgba(255, 255, 255, 0.6);

 display: flex;
 justify-content: center;
 align-items: center;

 border-radius: 50%;
 border: 1px solid darkorange;
 transition: all 350ms;

 &:hover{
    color: red;
 cursor: pointer;

 }
`
const Image = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`
const Top = styled.div`
 width: 100%;
 height: 200px;
 position: relative;
`
const Card = styled.div`
width: 300px;
min-height: 300px;
overflow: hidden;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
width: 95%;
`
