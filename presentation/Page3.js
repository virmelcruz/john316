import React from "react";
import {
  Heading,
  Slide,
  Text,
  Image
} from "spectacle";
import bestgift from '../assets/bestgift.jpg'

const Page3 = ({}) => {
  return (
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="tertiary" padding="0 0 40px 0" caps>Lesson 1: Jesus is the Best Gift given.</Heading>
      <Image src={bestgift} />
    </Slide>
  )
}

export default Page3
