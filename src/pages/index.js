import React from "react";
import { View } from "react";
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
  Icon,
  Medium,
  SocialMedia,
  Paragraph,
  Project,
  ProjectTitle,
  ProjectDesc,
  ProjectFinish,
  Footer
} from "../components/components";
import Helmet from "react-helmet";

export default () => (
  <React.Fragment>
    <meta
      name="google-site-verification"
      content="uzVT3MVGEcWEhYzq_H-JkqyBiF5m4GN_S77npmOuiXs"
    />
    <Wrapper>
      <Helmet
        title="LHHS CS Club"
        meta={[
          {
            name: "description",
            content:
              "The Laguna Hills High School Computer Science Club website."
          },
          {
            name: "keywords",
            content:
              "LHHS, Laguna Hills High School, CS, Computer Science, LHHS CS, Laguna Hills High School Computer Science Club"
          }
        ]}
      />
      <HeaderBlock>
        <div class="glitch large" data-text="LHHS CS">
          LHHS CS Club
        </div>

        <CenteredBox>
          <SocialMedia href="https://github.com/LHHS-CS" icon="github" />

          <SocialMedia href="https://instagram.com/lhhs.cs" icon="instagram" />
          <SocialMedia href="mailto:LHHS.Hackathon@gmail.com" icon="mail" />
        </CenteredBox>
      </HeaderBlock>
    </Wrapper>
    <Break />
    <SmallerWrapper>
      <CenteredBox></CenteredBox>
    </SmallerWrapper>
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
const Left = Flex.extend.attrs()`
  position: relative;
  left: -25px;
  ${mx[0]} {
    left: -7px;
  }
`;
const CenteredBox = Column.extend.attrs({})`
  display: flex;
  justify-content: center;
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
