import React from 'react';
import styled from 'styled-components';

function NewPhoto() {
  return (
    <>
    <Photo src="img/me.jpeg" alt="Photo of me"></Photo>
    </>
  );
}

export default NewPhoto;

const Photo = styled.img`
  text-align: center;
  border-width: 10px;
  border-style: outset;
  border-color: #f42828;
  `