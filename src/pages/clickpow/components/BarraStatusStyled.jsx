import styled from "styled-components";

export const BarraStatusStyled = styled.div`
  width: 48%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #393f44;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 15px 15px #00000022;
  border: #17191b solid 1px;
  margin-bottom: 10px;

  background-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.486),
    rgba(0, 0, 0, 0)
  );

  .textobarra {
    display: flex;
    justify-content: center;
    color: white;
    height: 40px;
    font-size: 10pt;
    text-align: center;
  }

  .barrageral {
    background-color: rgba(45, 45, 45, 0);
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 5px #00000022;
    border: #17191b solid 1px;
    background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.486),
      rgba(0, 0, 0, 0)
    );
  }

  .barrageral2{
    background-color: rgba(45, 45, 45, 0);
    width: 100%;
    aspect-ratio: 1/.5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20pt;
  }

  .divcirculo1 {
    width: 75%;
    height: 75%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divcirculo2 {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
    box-shadow: inset 0px 5px 5px #00000050;
    background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.486),
      rgba(0, 0, 0, 0)
    );
  }
`;
