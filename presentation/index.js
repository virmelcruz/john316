// Import React
import React from "react";
import styled from 'styled-components';
import ChristmasGIF from '../assets/Christmas.gif'
import gift from '../assets/gift.png'
import kohinoor from '../assets/kohinoor.jpg'
import cartier from '../assets/cartier.jpg'
import artcol from '../assets/artcol.jpg'
import tajmahal from '../assets/tajmahal.jpg'
import yatch from '../assets/superyatch.jpg'
import sin from '../assets/sin.jpg'
import huddle from '../assets/huddle.jpg'

import Page1 from './page1'
import Page2 from './Page2'
import Page3 from './Page3'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Pixel",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide", "slide"]} transitionDuration={500} theme={theme}>
        <Page1 />
        <Slide transition={["fade"]} bgColor="primary" bgImage={kohinoor}>
          <Text textColor="yellow">
            Koh-I-Noor Diamond - 1 billion USD
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" bgImage={cartier}>
          <Text textColor="yellow">
            Cartier Pearl Necklace – 20 million USD
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" bgImage={artcol}>
          <Text textColor="yellow">
            Art Collection – 1.1 billion USD
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" bgImage={tajmahal}>
          <Text textColor="yellow">
            Taj Mahal - 827 million USD
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" bgImage={yatch}>
          <Text textColor="yellow">
            Super Yacht – 80 million USD
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>JESUS!</Quote>
          </BlockQuote>
        </Slide>
        <Page2 />
        <Page3 />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" padding="0 0 40px 0" caps>Lesson 2: Jesus is the Best Gift that we can receive.</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.
          </Heading>
          <Text size={6} textColor="primary">Romans 6:23 ESV</Text>
          <Image src={sin} />
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Heading size={3} textColor="primary">
            PRACTICE
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="brown">
          <Heading size={6} textColor="primary">
            Power Verse: We can celebrate Christmas because of Jesus.
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="gray">
          <Image src={huddle} />
        </Slide>
      </Deck>
    );
  }
}
