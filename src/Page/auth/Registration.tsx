import React from 'react'
import styled from 'styled-components';
import {AiFillCamera} from "react-icons/ai"
import {useState} from "react"
import dum from "../../assets/code.png"

const Registration = () => {

    const [name, setName] = useState<string>("")
    const [imageUrl, setImageUrl] = useState<string>("")
    const [image, setImage] = useState<any>("")
    const [email, setEmail] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [phone, setPhone] = useState<string>("")

    const handleImage: any = (e: any)=>{
        const file = e.target.files[0];
        const readFile = URL.createObjectURL(file);
        setImageUrl(file);
        setImage(readFile)
    }

  return (
    <div>
      <Container>
        <Main>
            <Image>
                <ImgInput type="file" id="pix" onChange={handleImage}/>

                <Img src={imageUrl==="" ?  dum : image}/>
                <ImageLabel htmlFor='pix'>
                    <AiFillCamera size={23} style={{marginLeft: "3px"}}/>
                </ImageLabel>
            </Image>
            <Form>
              <Holder>
                <InputName>Enter your Name</InputName>
              <Input placeholder="Enter your Name"
              value={name}
              onChange={(e: any) =>{
                setName(e.target.value)
              }}/>
              </Holder>
              <HolderDouble>
              <Holder>
                <InputName>Enter your Name</InputName>
              <Input placeholder="Enter your Name"
              value={name}
              onChange={(e: any) =>{
                setName(e.target.value)
              }}/>
              </Holder>
              <Holder>
                <InputName>Enter your Name</InputName>
              <Input placeholder="Enter your Name"
              value={name}
              onChange={(e: any) =>{
                setName(e.target.value)
              }}/>
              </Holder>
              </HolderDouble>
              <Holder>
                <InputName>Enter your Name</InputName>
              <Input placeholder="Enter your Name"
              value={name}
              onChange={(e: any) =>{
                setName(e.target.value)
              }}/>
              </Holder>
            </Form>
        </Main>
      </Container>
    </div>
  )
}

export default Registration;
const HolderDouble = styled.div`
  display: flex;
`;


const InputName = styled.div`
position: absolute;
font-size: 16px;
background-color: white;
top: -10px;
left: 20px;
padding: 0 5px;
font-weight: bold;
color: black;
`;


const Holder = styled.div`
  width: 90%;
  height: 40px;
  position: relative;
  border-radius: 3px;
  border: 1px solid silver;
  margin: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;

  &::placeholder {
    font-family: Poppins;
  }
`;


const Img= styled.img`
width: 300px;
min-height: 400px;
object-fit: cover;
position: absolute;
top: 0;
left: 0;
`
const ImageLabel= styled.label`
position: absolute;
bottom: 10px;
right: 10px;

border-radius: 50%;
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;

background-color: #fff3e4;
transition: all 360ms;

&:hover{

}
`
const Image = styled.div`
width: 300px;
min-height: 400px;
position: relative;

border: 1px solid black;
margin-left: 10px;
`
const Form = styled.div`
width:500px;
min-height: 200px;


@media screen and (max-width: 515px){
width: 100%;
border: 1px solid red;
}
`
const Main = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
`
const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 justify-content: center;
`
