import React from 'react'
import { Heading, Flex, Box, Link, Image, Text } from 'rebass'
import {mx} from '../screensizes'
import { replace } from 'lodash';

export const Wrapper = Flex.extend.attrs({
  flexDirection: ['column', 'row'],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 80vh;
    text-align: left;
  }
`
export const SmallerWrapper = Flex.extend.attrs({
  flexDirection: ['column', 'row'],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 30vh;
    text-align: left;
  }
`

export const Icon = ({
  name = 'x',
  fill = '#fff',
  ...props
}) => (
  <Image
    alt={`${name} icon`}
    src={`https://icon.now.sh/${name}/${42}/${replace(fill, '#', '')}`}
    width={42}
    {...props}
  />
)
export const MediumIcon = ({
  name = 'x',
  fill = '#fff'
}) => (
  <Image
    src={'https://cdn.glitch.com/698488f3-b848-4b11-be98-9b7babb373a2%2FMedium.png?1533753316954'}
    width={42}
  />
)

export const SocialMedia = ({ href, icon, ...props }) => (
  <Link target="_blank" href={href} mx={[10.5, 3]} {...props}>
    <Icon name={icon} fill={'#000000'} />
  </Link>
)
export const Medium = ({ href, ...props }) => (
  <Link target="_blank" href={href} mx={[10.5, 3]} {...props}>
    <MediumIcon fill={'#000000'} />
  </Link>
)

export const Paragraph = Text.extend.attrs()`
  color: white;
  display: inline-block;
  text-align: left;
  line-height: 1.5;
  border-radius: 999px;
  padding: 0 .5em;
  margin-left: -0.5em;
`

export const Project = ({title, width, desc, href, ...props}) => (
    <Link target="_blank" href={href} color="white" {...props}>
      <StyledBox width={width} p={3} color='black' bg='white' {...props}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDesc>{desc}</ProjectDesc>
      </StyledBox>
    </Link>
)
export const ProjectFinish = ({title, width, desc, href, ...props}) => (
  <Link target="_blank" color="white" href={href} {...props}>
    <StyledBoxFinish width={width} p={3} color='black' bg='white' {...props}>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDesc>{desc}</ProjectDesc>
    </StyledBoxFinish>
  </Link>
)

export const ProjectTitle = Text.extend.attrs({fontSize: 25, textAlign: "center"})`
  font-family: 'Averta-Bold';
  color: black;
  line-height: 1.5;
`
export const ProjectDesc = Text.extend.attrs({textAlign: "center"})`
  font-family: 'Averta';
  color: 'grey';
  line-height: 1;
`

export const StyledBox = Box.extend.attrs({})`
  padding: 7% 0 7% 0;
  border-top:2px solid black;

`
export const StyledBoxFinish = Box.extend.attrs({})`
  padding: 7% 0 7% 0;
  border-top:2px solid black;
  border-bottom: 2px solid black;
`

export const Footer = Text.extend.attrs({py: 1, textAlign: 'center'})`
  font-family: 'Averta';
  color: black;
  line-height: 1;
`
