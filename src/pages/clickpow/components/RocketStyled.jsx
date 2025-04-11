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
    props.$animar ? "rocketanimation forwards" : "none"};
  user-select: none;
  animation-duration: ${(props) => props.velocidadeRocket}s;
  cursor: pointer;
  z-index: 5;

  @keyframes rocketanimation {
    3% {
      top: 35%;
    }

    50% {
      top: 65%;
    }

    100%{
      top: 73%;
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
