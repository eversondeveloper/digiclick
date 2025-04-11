import styled from "styled-components";

export const ArmasAtirandoStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 6;
  justify-content: space-evenly;
  cursor: pointer;

  .projetil {
    width: 5px;
    height: 5px;
    z-index: 1;
    background-color: #ff7b00;
    position: absolute;
    border-radius: 50%;
  }

  .anin1 {
    animation: an1 0.5s infinite ease-in-out;
  }

  .anin2 {
    animation: an2 0.1s infinite ease-in-out;
  }

  .anin3 {
    animation: an3 0.4s infinite ease-in-out;
  }

  .anin4 {
    animation: an4 0.2s infinite ease-in-out;
  }

  @keyframes an1 {
    0% {
      bottom: 5%;
      left: 5%;
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    100% {
      bottom: 100%;
      left: ${(props) => props.pos1}%;
      opacity: 0;
    }
  }

  @keyframes an2 {
    0% {
      bottom: 5%;
      left: 30%;
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    100% {
      bottom: 100%;
      left: ${(props) => props.pos2}%;
      opacity: 0;
    }
  }

  @keyframes an3 {
    0% {
      bottom: 5%;
      left: 50%;
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    100% {
      bottom: 100%;
      left: ${(props) => props.pos3}%;
      opacity: 0;
    }
  }

  @keyframes an4 {
    0% {
      bottom: 5%;
      left: 80%;
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    100% {
      bottom: 100%;
      left: ${(props) => props.pos4}%;
      opacity: 0;
    }
  }


`;
