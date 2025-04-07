import styled from "styled-components";

export const RocketStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -200px;
  width: ${(props) => props.$dimensaoRocket}px;
  left: ${(props) => props.$rocketPosicao}px;
  animation: ${(props) =>
    props.$animar
      ? "rocketanimation 10s cubic-bezier(0, 1, 1, .5) forwards"
      : "none"};
  user-select: none;

  @keyframes rocketanimation {
    /* 25% {
      top: 25%;
    }
    50% {
      top: 50%;
    }
    75% {
      top: 75%;
    } */
    100% {
      top: ${(props) => props.$posicaoRocket}%;
    }
  }

  .rocket {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rocket img {
    
    width: 100%;
  }
`;
