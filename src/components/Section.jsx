import React from 'react'
import styled from 'styled-components'
// import ground from '/images/model-s.png'

const Section = ({title, description, backgroundImg}) => {
  return (
    <Box bg = {backgroundImg}>
      <Blank1>

      </Blank1>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
      </Container>

      <Blank2>


      </Blank2>
      <Buttons>
        <Left>ORDER</Left>
        <Right>INVENTORY</Right>

      </Buttons>

      <Pic src="/images/down-arrow.svg" alt="" />

      

      
    </Box>
    
  )
}

export default Section


const Box  = styled.div`
display: flex;
flex-direction:column;
    background: ${props => `url('../images/${props.bg}')`};

    background-position:center;
    background-repeat: no-repeat;  
    background-size: cover;
    height: 100vh; 
    width: 100%;
    justify-content: space-between;
    align-items: center;

`

const Pic = styled.img`
  /* width: 50%; */
  height: 50px;
  margin: 10px;
  animation: animateDown infinite 1.5s;
`

const Container = styled.div`
display: grid;
align-items: center;
justify-content: center;
text-align: center;

`

const Buttons = styled.div`
display: flex;
flex-direction:row;
width: 100%;
height:100px;
justify-content: center;
align-items: center;  
letter-spacing: 2px;
font-size: 12px;
text-transform:uppercase;

`
const Right = styled.div`
background-color: #2a2a2a;
color    : white;
padding: 10px 50px;
border-style: none;
border-radius: 100px;
text-align: center;
align-items: center;
justify-content: center;

`
const Left = styled.div`

justify-content: center;
align-items: center;
background-color: #ffffff;
padding: 10px 67px;
border-style: none;
border-radius: 100px;
text-align: center;
`

const Blank1 = styled.div`
  width: 100%;

`
const Blank2 = styled.div`
  width: 100%;
  height: 220px;

`