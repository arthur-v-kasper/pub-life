import React from 'react'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  html{
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
    color: #212121;
    box-sizing: border-box;
  }

  *,*:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }
`

const GlobalStyleComponet = () => <GlobalStyle />

export default GlobalStyleComponet;