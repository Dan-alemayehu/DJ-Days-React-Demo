import React from 'react';
import styled from 'styled-components';

function NewName() {
  return (
    <>
    <Name>Daniel's Webpage</Name>
    </>
  );
}

export default NewName;

const Name = styled.h1`
  background-color: #000000;
  color: #94d2f9;
  font-size: 27px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  font-size: 80px;
  border-width: 20px;
  border-style: outset;
  border-color: #f42828;
  `
