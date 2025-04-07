import Card1 from "../../Components/cards/Card1";
import { iconFoguete, iconTeclado } from "../../Components/imageicons";
import { HomeStyled } from "./HomeStyled";

export default function Home() {
  return (
    <HomeStyled>
      <div className="main">
        <Card1
          imageIcon={iconFoguete}
          linkPag={"/clickpow"}
          alt={"Imagem Clickpow"}
          titulo={"Entrar no jogo Clickpow"}
        />
        <Card1
          imageIcon={iconTeclado}
          linkPag={"/keypow"}
          alt={"Imagem Keypow"}
          titulo={"Entrar no jogo keypow"}
        />
      </div>
    </HomeStyled>
  );
}
