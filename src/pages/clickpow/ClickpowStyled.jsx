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
}

.telainicial{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: #0000009d;
  background-image: url("/backinic1.png");
}

.rockettexto{
  width: 50%;
  position: absolute;
  top: 0%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rockettexto img{
  height: 40%;
  position: absolute;
}

.rockettexto img:nth-child(1){
  height: 90%;
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

`;
