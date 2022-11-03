import React, {useState} from 'react'
import styled from 'styled-components'
import tesla from './logo.svg'
import ham from './hamburger.png'
import cross from './cross.png'

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false);  // false - menu is closed
  return (
    <Navbar>
        <a>
            <img src={tesla}  />
        </a>
        <Menu>

            <ul>
                <li>MODEL S</li>
                <li>MODEL 3</li>
                <li>MODEL X</li>
                <li>MODEL Y</li>
            </ul>
        </Menu>
        <Rightmenu >
            <a href="">SHOP</a>
            <a href="">ACCOUNT</a>
            <a href="" ><img src={ham} alt="" /></a>
        </Rightmenu>

        <Hamburger onClick={()=> setBurgerStatus(true)}>
            <Cross>
             <img src={cross} alt="" />

            </Cross>
            <ul>
                <li>Monster Truck</li>
                <li>SpaceX</li>
                <li>Airless Tires</li>
                <li>Neuralink</li>
                <li>Contact Us</li>
            </ul>


        </Hamburger>

    </Navbar>

  )
}

export default Header

const Navbar = styled.div `
position: fixed;
display: flex;
width: 100%;
padding-left: 10px;
align-items: center;
justify-content: center;
img{
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 50px;
}

`


const Menu = styled.div`

width: 60%;

ul{
display: flex;
flex-direction: row;
list-style-type: none;
text-decoration: none;
justify-content: center;
align-items: center;
margin-left: 200px;
}

li{
padding :0px 20px 0px 20px ;
font-weight:600

}

`
const Rightmenu = styled.div`
display: flex;
width: 30%;
justify-content: space-evenly;
align-items: center;

a{
    
list-style-type: none;
text-decoration: none;
color: black;
font-weight:600;
align-items: center;
justify-content: center;
}
`

const Hamburger = styled.div`
position: fixed;
background:white;
width: 300px;
top: 0;
right: 0;
bottom: 0;
transform: ${props => props.show? 'translateX(0)' : 'translateX(100%)'};  //if true props.show? =   if false : ...

/* z-index: 100; */

ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    list-style-type: none;
    font-weight: 600;
    padding: 40px;
}

li{
    margin: 10px;
    padding: 5px;
    border-bottom: 1px solid black;
}
`


const Cross =  styled.div`
    display: flex;
    margin-top: 5px;
    width: 100%;
    height: 30px;
    justify-content: flex-end;
img{

}
`