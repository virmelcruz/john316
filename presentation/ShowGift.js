import React from "react";
import {
  Heading,
  Slide,
  Text,
  Image
} from "spectacle";
import bestgift from '../assets/bestgift.jpg'

const ShowGift = ({bgImage}) => {
  return (
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" bgImage={bgImage}>
    </Slide>
  )
}

export default ShowGift
