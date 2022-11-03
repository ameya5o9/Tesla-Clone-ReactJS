import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Wraper>
        <Section
                title = "Model S"
                description = "lorem10"
                backgroundImg = "model-s.png"/>

        <Section
        title = "Model X"
        description = "lorem10"
        backgroundImg = "model-x.jpg"/>

        <Section
        title = "Model Y"
        description = "lorem10"
        backgroundImg = "model-y.jpg"/>

        <Section
        title = "Model V"
        description = "lorem10"
        backgroundImg = "model-3.jpg"/>
        

    </Wraper>
  )
}

export default Home



const Wraper = styled.div`
    
`