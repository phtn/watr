import React from 'react'
import DropImage from "../assets/drop.svg";
import Fade from 'react-reveal/Fade'


export default function Drop(){
  return (
    <Fade cascade duration={2000} top>
      <img src={DropImage} alt="" height='15' />
      <img src={DropImage} alt="" height='15' />
      <img src={DropImage} alt="" height='15' />
    </Fade>
  )
}