import React from "react";
import { View, Dimensions } from "react";
import "../style.css";
import { mx } from "../screensizes";
import {
  Heading,
  Flex,
  Column,
  Box,
  Container,
  Link,
  Text,
  Image
} from "rebass";

import {
  Wrapper,
  SmallerWrapper,
  Paragraph,
  Project,
  ProjectTitle,
  ProjectDesc,
  ProjectFinish,
  Footer
} from "../components/components";
import styled from "styled-components";

//let width = Dimensions.get("window").width;
//let height = Dimensions.get("window").height;
export default () => (
  <React.Fragment>
    <Text fontSize={[3, 4, 5]} fontWeight="bold">
      {" "}
      To join the remind for the coresponding club, text following codes to
      81010:
    </Text>
    <Text fontSize={[3, 4, 5]}>Computer Science Club @lhhs-cs </Text>
    <Text fontSize={[3, 4, 5]}>Robotics Club @lhhsrobot</Text>{" "}
    <Text fontSize={[3, 4, 5]}> Makerspace Club @lhhsmaker</Text>
  </React.Fragment>
);

const Hello = Heading.extend.attrs({ m: 0, fontSize: 50, textAlign: "left" })`
  position: relative;
  left: -6px;

  ${mx[0]} {
    left: 0px;
  }
  line-height: 1.5;
  color: white;
  font-family: "Averta-Bold";
`;
const SmallerHello = Heading.extend.attrs({
  fontSize: 45,
  mr: 3,
  textAlign: "center"
})`
  line-height: 1.5;
  color: white;
  font-family: "Averta-Bold";
`;
const Subhead = Heading.extend.attrs({
  f: 6,
  m: 0,
  fontSize: 30,
  textAlign: "center"
})`
  line-height: 2;
  color: white;
  font-family: "Averta-Bold";
`;

export const Break = Flex.extend.attrs({
  flexDirection: ["column", "row"],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 5vh;
    text-align: left;
  }
`;

const HeaderBlock = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const CenteredBlock = Column.extend.attrs({
  py: 2,
  ml: [-25, 210],
  mr: [-40, 240]
})`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
