import { useEffect, useRef, useState } from "react";
import { VidasStyled } from "./VidasStyles";

export default function Vidas(props) {
  const [posicaoVida, setPosicaoVida] = useState(0);
  const [display, setDisplay] = useState("");

  const somVidaDescendoRef = useRef(new Audio("/vidadescendo1.mp3"));
  const somVidaDescendoTocar = (a) => {
    const somVidaDescendo = somVidaDescendoRef.current;
    somVidaDescendo.currentTime = 0;
    somVidaDescendo.play();
    somVidaDescendo.loop = false;

    if (a) {
      somVidaDescendo.play();
    } else {
      somVidaDescendo.pause();
    }
  };

  const somVidaExtraRef = useRef(new Audio("/vidaextra.wav"));
  const somVidaExtraTocar = () => {
    const somVidaExtra = somVidaExtraRef.current;
    somVidaExtra.currentTime = 0;
    somVidaExtra.loop = false;
    somVidaExtra.play();
  };

  useEffect(() => {
    if (somVidaDescendoRef.current) {
      somVidaDescendoTocar(true);
    }
  }, []);

  useEffect(() => {
    if (props.tamanhoArea) {
      setPosicaoVida(Math.floor(Math.random() * (props.tamanhoArea.width - 0)));
    }
  }, [props.tamanhoArea]);

  return (
    <VidasStyled
      posicaoVida={posicaoVida}
      display={display}
      onClick={() => {
        props.setVidas((prev) => prev < 2 && prev > 0 && prev + 1);
        setDisplay("none");
        somVidaExtraTocar();
        somVidaDescendoTocar(false);
      }}
    >
      <img src="/vidas.png" alt="Vidas" />
    </VidasStyled>
  );
}
