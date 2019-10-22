import React from "react";
import {
  Heading,
  Slide,
  Text
} from "spectacle";
import styled from 'styled-components'

const ui = {}

ui.SpanUnderline = styled.span`
  color: ${(props) => props.isUnderline ? 'white' : ''};
`

const Page2 = ({}) => {
  let isUnderline = false;

  const onClick = () => {
    console.log('click')
    isUnderline = true;
  }

  return (
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>Word For Today</Heading>
      <Heading size={5} textColor="secondary">For God so loved the world,
        <ui.SpanUnderline onClick={onClick} isUnderline>
          that he gave his only Son,
        </ui.SpanUnderline>
        that whoeverbelieves in him should not perish but have eternal life.</Heading>
      <Text size={6} textColor="secondary">John 3:16 ESV</Text>
    </Slide>
  )
}

export default Page2
