import React from "react";
import styled from 'styled-components';
import ChristmasGIF from '../assets/Christmas.gif'
import gift from '../assets/gift.png'
import { GoToAction } from 'spectacle';

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
  Text
} from "spectacle";

const ui = {}

ui.giftBtn = styled.div`
  width: 80px;
  height: 100px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: ${(props) => props.bg ? `url(${gift})` : 'transparent'};
  background-size: 100%;
  background-repeat: no-repeat;
  color: white;
  cursor: pointer;
`

ui.TitleHeader = styled.h1`
  text-orientation: upright;
  writing-mode: vertical-lr;
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`

const Page1 = ({}) => {

  return (
    <Slide transition={["fade"]} bgColor="primary" bgImage={ChristmasGIF}>
      <ui.TitleHeader left="0px" top="-300px">
        CHRISTMAS
      </ui.TitleHeader>
      <ui.TitleHeader left="100%" top="-300px">
        Emojie
      </ui.TitleHeader>
      <div>
        <GoToAction
          render={goToSlide => (
            <ui.giftBtn
              top="250%"
              left="38%"
              onClick={() => {
                goToSlide("2")
              }}
            >
              Gift 1
            </ui.giftBtn>
          )}
        />

        <GoToAction
          render={goToSlide => (
            <ui.giftBtn
              top="260%"
              left="52%"
              onClick={() => {
                goToSlide("3")
              }}
            >
              Gift 2
            </ui.giftBtn>
          )}
        />

        <GoToAction
          render={goToSlide => (
            <ui.giftBtn
              top="180px"
              left="63%"
              onClick={() => {
                goToSlide("4")
              }}
            >
              Gift 3
            </ui.giftBtn>
          )}
        />

        <GoToAction
          render={goToSlide => (
            <ui.giftBtn
              top="150%"
              left="66%"
              bg="true"
              onClick={() => {
                goToSlide("5")
              }}
            >
              Gift 4
            </ui.giftBtn>
          )}
        />

        <GoToAction
          render={goToSlide => (
            <ui.giftBtn
              top="220%"
              left="72%"
              bg="true"
              onClick={() => {
                goToSlide("6")
              }}
            >
              Gift 5
            </ui.giftBtn>
          )}
        />

        <GoToAction
          render={goToSlide => (
            <ui.giftBtn
              top="-320%"
              left="50%"
              onClick={() => {
                goToSlide("7")
              }}
            >
            </ui.giftBtn>
          )}
        />
      </div>
    </Slide>
  )
}

export default Page1;
