import styled from "styled-components";

export const ClickpowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .dashboard {
    width: 20%;
    height: 100%;
    background-color: #202020;
    color: #ffffff;
    padding: 20px;
  }

  .dashboard p {
    margin: 0;
    padding: 10px;
    color: #ffffff;
  }

  .container {
  background-image: url("/back56.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 80%;
  overflow: hidden;
  position: relative;
  animation: animage 8s ease-in-out infinite;
}

.rocketcaiu{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: #00000096;
  user-select: none;
}

.rocketcaiu img{
  width: 40%;
  animation: pow 5s ease-in-out infinite;
  cursor: pointer;
  user-select: none;
}

@keyframes pow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes animage {
  0% {
    background-size: 100%;
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    transform: translate(-1px, 1px) rotate(-0.2deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(0.2deg);
  }
  60% {
    background-size: 105%;
    transform: translate(-1.5px, 0.5px) rotate(-0.3deg);
  }
  80% {
    transform: translate(1.5px, -1px) rotate(0.3deg);
  }
  100% {
    background-size: 100%;
    transform: translate(0px, 0px) rotate(0deg);
  }
}

`;
