import { useEffect, useRef, useState } from "react";
import { TelaInicialStyled } from "./TelaInicialStyled";

export default function TelaInicial(props) {
  const [texto, setTexto] = useState("");
  const [indice, setIndice] = useState(0);
  const [btnContinue, setBtneContinue] = useState(false);

  const textoTela = `Atenção, todas as bases!
  Nosso planeta está sob ataque de forças desconhecidas. Naves alienígenas foram detectadas em múltiplas regiões e continuam a se aproximar. As intenções dos invasores ainda são incertas.
  Permaneçam em seus postos de combate e mantenham a calma. Não tomem nenhuma ação sem ordens diretas de seus comandantes.
  Aguardem instruções até o último aviso.`;

  const somComputadorRef = useRef(new Audio("/barulhocomputador2.mp3"));
  useEffect(() => {
    if (indice < textoTela.length) {
      const timeout = setTimeout(() => {
        setTexto((prev) => prev + textoTela[indice]);
        setIndice((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      somComputadorRef.current.pause();
      somComputadorRef.current.currentTime = 0;
      setBtneContinue(true);
    }
  }, [indice, textoTela]);

  const somComputadorTocar = () => {
    const som = somComputadorRef.current;
    som.currentTime = 0;
    som.loop = true;
    som.play();
  };

  useEffect(() => {
    if (somComputadorRef.current) {
      somComputadorTocar();
    }
  }, []);

  const somSirene1Ref = useRef(new Audio("/sirene.mp3"));

  const somSirene1Tocar = () => {
    const som = somSirene1Ref.current;
    som.currentTime = 0;
    som.loop = true;
    som.play();
  };

  useEffect(() => {
    if (somSirene1Ref.current) {
      somSirene1Tocar();
    }
  }, []);

  return (
    <TelaInicialStyled>
      <div className="tela">
        {texto}
        <span className="cursor">|</span>
        {btnContinue && (
          <p
            onClick={() => {
              somSirene1Ref.current.pause()
              props.setTelaInicial(false);
              props.setNave(true);
              props.somNaveTocar();
              //  props.somRadio1Tocar()
            }}
          >
            Continue!
          </p>
        )}
      </div>
    </TelaInicialStyled>
  );
}
