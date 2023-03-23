import React from 'react';
import styled from 'styled-components';

function NewParagraph() {
  return (
    <>
    <Paragraph>Hi! My name is Daniel and here are a few things to know about me:</Paragraph>
    <Paragraph>I was born in Minneapolis but grew up in North Dakota and northern Minnesota.</Paragraph>
    <Paragraph>I am 27 years old.</Paragraph>
    <Paragraph>I am a student in the Full Stack Development course with Hack The Gap, and I am Learning a lot about coding!</Paragraph>
    <Paragraph>I currently work at a group home for adults with autism and I work overnights there.</Paragraph>
    <Paragraph>I play video games in my freetime, mostly Bethesda Softworks games but other ones too.</Paragraph>
    <Paragraph>I love sports! I used to watch a lot of football and basketball but now I watch more soccer and hockey.</Paragraph>
    <Paragraph>Anything else you want to know about me? Just ask here!</Paragraph>
    </>
  );
}

export default NewParagraph;

const Paragraph = styled.p`
  background-color: #000000;
  color: #94d2f9;
  font-size: 27px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  border-width: 10px;
  border-style: outset;
  border-color: #f42828;

  `
