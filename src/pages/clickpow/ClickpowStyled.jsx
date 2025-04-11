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

  .telainicial {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 5;
    background-color: #0000009d;
    background-image: url("/backinic1.png");
    background-size: cover;
  }

  .telainicial img {
    cursor: pointer;
    transition: 0.2s;
  }

  .telainicial img:hover {
    transform: scale(1.1);
  }

  .rockettexto {
    width: 50%;
    position: absolute;
    top: 0%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rockettexto img {
    height: 80%;
    position: absolute;
  }

  .rocketcaiu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 6;
    background-color: #00000096;
    user-select: none;
  }

  .rocketcaiu img {
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

  .nave {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -400px;
    left: -1500px;
    width: 100%;
    z-index: 4;
    animation: entradaNave 17s ease-in-out forwards;
    user-select: none;
  }

  .nave img {
    width: 80%;
    animation: flutuarNaveHorizontal 20s ease-in-out infinite alternate;
    animation-delay: 8s;
  }

  /* Entrada inicial da nave */
  @keyframes entradaNave {
    0% {
      top: -400px;
      left: -1500px;
      transform: scale(0.8);
    }
    25% {
      top: 0%;
      left: 10%;
      transform: scale(1);
    }
    50% {
      top: -10%;
      left: 5%;
    }
    75% {
      top: -20%;
      left: 0%;
    }
    100% {
      top: -40%;
      left: 0%;
    }
  }

  /* Flutuação horizontal contínua após a entrada */
  @keyframes flutuarNaveHorizontal {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(10%);
    }
    50% {
      transform: translateX(-15%);
    }
    75% {
      transform: translateX(13%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .muralha {
    z-index: 5;
    width: 120%;
    position: absolute;
    top: 80%;
    left: -10%;
  }

  .muralha img {
    z-index: 3;
    width: 100%;
    height: 40%;
  }

  .textodash {
    color: #ffffff;
    margin-bottom: 5px;
  }

  .input1 {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #d8d8d895;
    margin-bottom: 10px;
  }

  .h1nome {
    display: ${(props) => (props.teclaClicada == "Enter" ? "" : "none")};
    color: #0199ff;
    cursor: ${(props) =>
      props.teclaClicada == "Enter" ? "pointer" : "default"};
  }

  .cabecalhodash {
    margin-bottom: 20px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .textodash2 {
    margin-bottom: 20px;
  }

  .barra {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
`;
