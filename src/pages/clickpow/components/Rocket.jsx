import { useRef, useEffect, useState } from "react";
import { RocketStyled } from "./RocketStyled";

export default function Rocket(props) {
  const imgRocket = "/rocket1.gif";
  const imgExplosao1 = "/explosion3.gif";
  const imgExplosao2 = "/explosion2.gif";

  const [imageRocket, setImageRocket] = useState(imgRocket);
  const [rocketDisplay, setRocketDisplay] = useState(null);
  const [imageExplosion, setImageExplosion] = useState(imgExplosao1);
  const [rocketPosicao, setRocketPosicao] = useState(0);
  const [animar, setAnimar] = useState(true);
  const [dimensaoRocket, setDimensaoRocket] = useState(70);
  const [posicaoRocket, setPosicaoRocket] = useState(100);

  const rocketRef = useRef(null);
  const rocketAninRef = useRef(null);

  const alturaContainer = props.tamanhoArea.height;
  const larguraContainer = props.tamanhoArea.width;

  const rocketSomExplosionRef = useRef(new Audio("/explosao.mp3"));
  const rocketSomDisparoRef = useRef(new Audio("/disparado.mp3"));

  const somExplosao1 = () => {
    if (rocketSomExplosionRef.current) {
      rocketSomExplosionRef.current.currentTime = 0;
      rocketSomExplosionRef.current.play();
    }
  };

  const somDisparo1 = () => {
    if (rocketSomDisparoRef.current) {
      rocketSomDisparoRef.current.currentTime = 0;
      rocketSomDisparoRef.current.play();
    }
  };

  // Evento no fim da animação
  useEffect(() => {
    const rocketAnin = rocketAninRef.current;

    const mensagem = () => {
      const novaLargura = 200;
      const larguraAnterior = dimensaoRocket;
      const ajuste = (novaLargura - larguraAnterior) / 2;

      setImageRocket(imgExplosao2);
      setDimensaoRocket(novaLargura);
      setPosicaoRocket(70); // pode ser ajustado se necessário
      setRocketPosicao((prev) => Math.max(0, prev - ajuste)); // centralizar
    };

    if (rocketAnin) {
      rocketAnin.addEventListener("animationend", mensagem, false);
    }

    return () => {
      if (rocketAnin) {
        rocketAnin.removeEventListener("animationend", mensagem, false);
      }
    };
  }, [dimensaoRocket]);

  // Quando o foguete é destruído
  const funcRocket = () => {
    setImageRocket(imageExplosion);
    setTimeout(() => {
      setAnimar(false);
      setRocketDisplay("none");
    }, 700);
  };

  // Reposição e reinício após destruição
  useEffect(() => {
    if (animar === false) {
      setTimeout(() => {
        rocketSomDisparoRef.current.pause();
        rocketSomDisparoRef.current.currentTime = 0;
        somDisparo1();
        setAnimar(true);
        setRocketDisplay("block");
        setDimensaoRocket(70);
        setPosicaoRocket(100);
        setRocketPosicao(Math.floor(Math.random() * (larguraContainer - 70)));
        setImageRocket(imgRocket);
      }, 200);
    }
  }, [animar, larguraContainer]);

  // Definir posição aleatória inicial
  useEffect(() => {
    setRocketPosicao(Math.floor(Math.random() * (larguraContainer - dimensaoRocket)));
  }, [larguraContainer]);

  return (
    <RocketStyled
      ref={rocketAninRef}
      $animar={animar}
      $rocketPosicao={rocketPosicao}
      $dimensaoRocket={dimensaoRocket}
      $posicaoRocket={posicaoRocket}
    >
      <div
        className="rocket"
        style={{ display: rocketDisplay }}
        onDoubleClick={() => {
          funcRocket();
          somExplosao1();
          props.setQuantRocketsDest((prev) => prev + 1);
        }}
      >
        <img ref={rocketRef} src={imageRocket} alt="Rocket" />
      </div>
    </RocketStyled>
  );
}
