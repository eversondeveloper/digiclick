import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  height: 8vh;
  justify-content: center;

  .logomenu {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logocontainer {
    width: 19vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    font-size: 20pt;
    text-decoration: none;
  }

  .menu a {
    color: #f2ede4;
    padding: 5px;
    text-decoration: none;
    font-weight: bold;
  }

  .menu a:hover {
    color: #9a9a9a;
  }
`;
