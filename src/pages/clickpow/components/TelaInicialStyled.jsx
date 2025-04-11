import styled from "styled-components";

export const TelaInicialStyled = styled.div`
  background-color: black;
  background-image: url(/tela6.png);
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  color: lime;
  align-items: center;
  justify-content: center;
  z-index: 6;
  display: flex;

  animation: scalatela 10s infinite alternate ease-in-out;

  @keyframes scalatela {
  0% {
    transform: scale(1) rotate(0deg) translateY(0px) translateX(0px);
  }

  10% {
    transform: scale(1.02) rotate(0.3deg) translateY(-2px) translateX(1px);
  }

  25% {
    transform: scale(1.03) rotate(-0.5deg) translateY(1px) translateX(-2px);
  }

  40% {
    transform: scale(1.015) rotate(0.2deg) translateY(-1px) translateX(2px);
  }

  60% {
    transform: scale(1.025) rotate(0.5deg) translateY(2px) translateX(-1px);
  }

  75% {
    transform: scale(1.01) rotate(-0.4deg) translateY(0px) translateX(1px);
  }

  90% {
    transform: scale(1.02) rotate(0.1deg) translateY(-1px) translateX(0px);
  }

  100% {
    transform: scale(1) rotate(0deg) translateY(0px) translateX(0px);
  }
}



  .tela {
    color: lime;
    width: 30%;
    height: 30%;
    font-family: "VT323", monospace;
    font-size: 1.3vw;
  }

  .tela p{
    color: #237C2C;
    font-family: "VT323", monospace;
    font-size: 1.3vw;
    text-align: right;
    animation: continue .2s infinite alternate ease-in-out;
    cursor: pointer;
  }

  @keyframes continue {

    0%{
      color: #237C2C;
    }
    100%{
      color: #36b643;

    }
    
  }

  .cursor {
    display: inline-block;
    width: 1ch;
    animation: blink 1s step-end infinite;
    color: #237C2C;
    font-family: "VT323", monospace;
    font-size: 1.3vw;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;
