import styled from "styled-components";

export const VidasStyled = styled.div`
    display: ${props => props.display};
  z-index: 6;
  position: absolute;
  top: -200px;
  left: ${props => props.posicaoVida - 30}px;
  width: 60px;
  height: 60px;
  user-select: none;
  animation: vidas forwards;
  animation-duration: 10s;
  cursor: pointer;
  

  @keyframes vidas {
    10% {
      top: 35%;
    }

    50% {
      top: 75%;
    }

    100% {
      top: 100%;
    }
  }

  img {
    width: 100%;
  }
`;
