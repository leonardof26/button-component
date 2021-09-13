import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --default-bg: #e0e0e0;
    --default-text: #3F3F3F;
    --default-hover: #aeaeae;

    --primary-bg: #2962FF;
    --primary-text: #fff;
    --primary-hover: #0039CB;

    --secondary-bg: #455A64;
    --secondary-text: #fff;
    --secondary-hover: #1C313A;

    --danger-bg: #D32F2F;
    --danger-text: #fff;
    --danger-hover: #9A0007;

    --text-hover: #2962FF1A;

    --disabled-color: #9e9e9e;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html{
    scroll-behavior: smooth;

    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  html, body, #root{
    height: 100%;
    font-family: 'Noto Sans JP', sans-serif;
  }

  button{
    cursor: pointer;
  }
`
