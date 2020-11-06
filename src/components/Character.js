// Write your Character component here
// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
33% {
  transform: scale(.6);
}
66% {
  transform: scale(1.4);
}
`

const StyledCharacter = styled.article`
    width: 100%;
    animation: ${kf} 2s;
    .charaPic{
        background-color:#2bccc7;
        opacity:80%;

    }
    .charaText{
      color: #0eb185;
      font-family: "Comic Sans MS", "Comic Sans", cursive;
        font-size: 1.2rem;
        font-weight: bold;
       
        opacity:80%;
       background-color: #d7d7d7;
    }
`

export default function Character(pr) {
    //console.log(pr)
    return (
      <StyledCharacter>
          <div className="charaPic">
            <img src={pr.info.image} alt=" "/>
          </div>
          <div className="charaText">
            Name: {pr.info.name}<br></br>

            Species: {pr.info.species} <br></br>
            
            Status: {pr.info.status} <br></br>
            Gender: {pr.info.gender} 
           
           <br></br>
            <br></br> 
           
            
          </div>
          
      </StyledCharacter>
    )
  }
