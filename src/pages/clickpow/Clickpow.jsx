import { ClickpowStyled } from "./ClickpowStyled";
import { DefaultPagsStyled } from "../DefaultPagsStyled";
import { useRef, useEffect, useState } from "react";
import Rocket from "./components/Rocket";
import ArmasAtirando from "./components/ArmasAtirando";
import Vidas from "./components/Vidas";
import BarraStatus from "./components/BarraStatus";
import TelaInicial from "./components/TelaInicial";
import Janela from "./components/Janela";

export default function Clickpow() {
  const [tamanhoArea, setTamanhoArea] = useState({ width: 0, height: 0 });
  const tamanhoAreaRef = useRef(null);
  const [quantRocketsDest, setQuantRocketsDest] = useState(0);
  const [quantRockets, setQuantRockets] = useState(0);
  const [quantClicks, setQuantClicks] = useState(0);
  const [quantClicksUteis, setQuantClicksUteis] = useState(0);
  const [pow, setPow] = useState(false);
  const [telaInicial, setTelaInicial] = useState(true);
  const [levelUp, setLevelUp] = useState(false);
  const [youWin, setYouWin] = useState(false);
  const [rocket, setRocket] = useState(false);
  const [nave, setNave] = useState(false);
  const [armasTiros, setArmasTiros] = useState(false);
  const [velocidadeRocket, setVelocidadeRocket] = useState(20);
  const [vidas, setVidas] = useState(2);
  const [gameOver, setGameOver] = useState(false);
  const [fase, setFase] = useState(1);
  const [vidaExtra, setVidaExtra] = useState(false);
  const [nomeTexto, setNomeTexto] = useState("");
  const [teclaClicada, setTeclaClicada] = useState("");

  const aninNaveRef = useRef(null);
  const somYouWin = useRef(new Audio("/somlevelup.mp3"));

  const somYouWinTocar = () => {
    if (somYouWin.current) {
      somYouWin.current.currentTime = 0;
      somYouWin.current.play();
    }
  };

  const somRocketCaiu = useRef(new Audio("/caiu2.mp3"));
  const somRocketCaiuTocar = () => {
    if (somRocketCaiu.current) {
      somRocketCaiu.current.currentTime = 0;
      somRocketCaiu.current.play();
    }
  };

  const somLevelUp = useRef(new Audio("/somlevelup2.mp3"));
  const somLevelUpTocar = () => {
    if (somLevelUp.current) {
      somLevelUp.current.currentTime = 0;
      somLevelUp.current.play();
    }
  };

  const somTema = useRef(new Audio("/temaprincipal.mp3"));
  const somTemaTocar = () => {
    if (somTema.current) {
      somTema.current.currentTime = 0;
      // somTema.current.play();
      somTema.current.loop = true;
    }
  };

  const somNave = useRef(new Audio("/soundnave2.mp3"));
  const somNaveTocar = () => {
    if (somNave.current) {
      somNave.current.currenTime = 0;
      somNave.current.play();
      somNave.current.loop = false;
    }
  };

  const somNaveVoando = useRef(new Audio("/navevoando.mp3"));
  const somNaveVoandoTocar = () => {
    if (somNaveVoando.current) {
      somNaveVoando.current.currenTime = 0;
      somNaveVoando.current.play();
      somNaveVoando.current.loop = true;
      somNaveVoando.current.volume = 0.7;
    }
  };

  const somVento = useRef(new Audio("/vento.wav"));
  const somVentoTocar = () => {
    if (somVento.current) {
      somVento.current.currenTime = 0;
      somVento.current.play();
      somVento.current.loop = true;
    }
  };

  const somTiro1 = useRef(new Audio("/tiros1.mp3"));
  const somTiro1Tocar = () => {
    if (somTiro1.current) {
      somTiro1.current.currenTime = 0;
      somTiro1.current.play();
      somTiro1.current.loop = true;
    }
  };

  const somTiro2 = useRef(new Audio("/tiros2.mp3"));
  const somTiro2Tocar = () => {
    if (somTiro2.current) {
      somTiro2.current.currenTime = 0;
      somTiro2.current.play();
      somTiro2.current.loop = true;
    }
  };

  const somTiro3 = useRef(new Audio("/tiros3.mp3"));
  const somTiro3Tocar = () => {
    if (somTiro3.current) {
      somTiro3.current.currenTime = 0;
      somTiro3.current.play();
      somTiro3.current.loop = true;
    }
  };

  const somBg2 = useRef(new Audio("/bg2.mp3"));
  const somBg2Tocar = () => {
    if (somBg2.current) {
      somBg2.current.currenTime = 0;
      // somBg2.current.play();
      somBg2.current.loop = true;
      somBg2.current.volume = 0.3;
    }
  };

  const somRadio1 = useRef(new Audio("/radio1.mp3"));
  const somRadio2 = useRef(new Audio("/radio2.mp3"));
  const somRadio3 = useRef(new Audio("/radio3.mp3"));
  const somRadio4 = useRef(new Audio("/radio4.mp3"));
  const somRadio5 = useRef(new Audio("/radio5.mp3"));
  const somRadio6 = useRef(new Audio("/radio6.mp3"));

  const somRadio1Tocar = () => {
    if (somRadio1.current) {
      somRadio1.current.currenTime = 0;
      somRadio1.current.play();
      somRadio1.current.loop = false;
    }
  };
  const somRadio2Tocar = () => {
    if (somRadio2.current) {
      somRadio2.current.currenTime = 0;
      somRadio2.current.play();
      somRadio2.current.loop = false;
    }
  };
  const somRadio3Tocar = () => {
    if (somRadio3.current) {
      somRadio3.current.currenTime = 0;
      somRadio3.current.play();
      somRadio3.current.loop = false;
    }
  };
  const somRadio4Tocar = () => {
    if (somRadio4.current) {
      somRadio4.current.currenTime = 0;
      somRadio4.current.play();
      somRadio4.current.loop = false;
    }
  };
  const somRadio5Tocar = () => {
    if (somRadio5.current) {
      somRadio5.current.currenTime = 0;
      somRadio5.current.play();
      somRadio5.current.loop = false;
    }
  };

  const somRadio6Tocar = () => {
    if (somRadio6.current) {
      somRadio6.current.currenTime = 0;
      somRadio6.current.play();
      somRadio6.current.loop = false;
    }
  };

  const somBg2Parar = () => {
    somBg2.current.pause();
  };

  useEffect(() => {
    if (telaInicial && somTema.current) {
      somTemaTocar();
    } else {
      somTema.current.pause();
      somTema.current.currentTime = 0;
    }
  }, [telaInicial]);

  useEffect(() => {
    if (levelUp) {
      somLevelUpTocar();
      somBg2Parar();
    } else {
      somLevelUp.current.pause();
      somLevelUp.current.currentTime = 0;
      somBg2Tocar();
    }

    if (pow) {
      somBg2Parar();
    } else {
      somBg2Tocar();
    }
  }, [levelUp, pow]);

  useEffect(() => {
    if (quantRocketsDest) {
      setQuantClicksUteis(quantRocketsDest * 2);
    }
  }, [quantRocketsDest]);

  useEffect(() => {
    const atualizarTamanho = () => {
      if (tamanhoAreaRef.current) {
        const { clientWidth, clientHeight } = tamanhoAreaRef.current;
        setTamanhoArea({ width: clientWidth, height: clientHeight });
      }
    };

    setTimeout(atualizarTamanho, 0);

    window.addEventListener("resize", atualizarTamanho);
    return () => window.removeEventListener("resize", atualizarTamanho);
  }, []);

  useEffect(() => {
    document.title = "Clickpow";
  }, []);

  useEffect(() => {
    if (quantRocketsDest == 0 && !telaInicial) {
      somRadio1Tocar();
    } else if (quantRocketsDest == 20) {
      setLevelUp(true);
      somRadio2Tocar();
      setFase((prev) => prev + 1);
      setVelocidadeRocket(15);
      somTiro3Tocar();
    } else if (quantRocketsDest == 40) {
      setLevelUp(true);
      somRadio3Tocar();
      setFase((prev) => prev + 1);
      setVelocidadeRocket(10);
      somTiro3Tocar();
    } else if (quantRocketsDest == 60) {
      setLevelUp(true);
      somRadio4Tocar();
      setFase((prev) => prev + 1);
      setVelocidadeRocket(7);
      somTiro3Tocar();
    } else if (quantRocketsDest == 80) {
      setLevelUp(true);
      somRadio5Tocar();
      setFase((prev) => prev + 1);
      setVelocidadeRocket(5);
    } else if (quantRocketsDest == 100) {
      somRadio6Tocar();
    }
  }, [quantRocketsDest, telaInicial]);

  useEffect(() => {
    if (quantRocketsDest == 100) {
      setYouWin(true);
    }
  }, [quantRocketsDest]);

  useEffect(() => {
    if (youWin) {
      somYouWinTocar();
    } else {
      somYouWin.current.pause();
      somYouWin.current.currentTime = 0;
    }
  }, [youWin]);

  useEffect(() => {
    if (pow) {
      somRocketCaiuTocar();
    } else {
      somRocketCaiu.current.pause();
      somRocketCaiu.current.currentTime = 0;
    }
  }, [pow]);

  useEffect(() => {
    const fimAnin = aninNaveRef.current;

    const mensagem = () => {
      setRocket(true);
      somVentoTocar();
      somNaveVoandoTocar();
      somBg2Tocar();

      setTimeout(() => {
        somTiro1Tocar();
        somTiro2Tocar();
        setArmasTiros(true);
      }, 2000);
    };

    if (fimAnin) {
      fimAnin.addEventListener("animationend", mensagem, false);
    }

    return () => {
      if (fimAnin) {
        fimAnin.removeEventListener("animationend", mensagem, false);
      }
    };
  }, [aninNaveRef, nave]);

  useEffect(() => {
    if (vidas == 0) {
      setGameOver(true);
    }
  }, [gameOver, vidas]);

  const nomeTextoRef = useRef(null);

  useEffect(() => {
    const texto = (e) => {
      setNomeTexto(e.target.value);
    };

    document.addEventListener("input", texto);

    return () => {
      document.removeEventListener("input", texto);
    };
  }, []);

  useEffect(() => {
    const teclaClicada = (e) => {
      setTeclaClicada(e.key);
    };

    document.addEventListener("keydown", teclaClicada);

    return () => {
      document.removeEventListener("keydown", teclaClicada);
    };
  }, []);

  useEffect(() => {
    if (teclaClicada == "Enter") {
      nomeTextoRef.current.style.display = "none";
    } else {
      nomeTextoRef.current.style.display = "";
    }
  }, [teclaClicada]);

  return (
    <DefaultPagsStyled>
      <div className="main">
        <ClickpowStyled teclaClicada={teclaClicada}>
          <div className="dashboard">
            <div className="cabecalhodash">
              <div className="textodash">
                {teclaClicada == "Enter"
                  ? "Clique no nome para editar!"
                  : "Digite seu nome e aperte Enter!"}
              </div>
              <input
                type="text"
                name="Nome"
                className="input1"
                ref={nomeTextoRef}
                placeholder="Digite o nome!"
                autoFocus
              />
              <h1
                onClick={() => {
                  setTeclaClicada("");
                }}
                className="h1nome"
              >
                {nomeTexto}
              </h1>
            </div>

            <div className="divinfos">
              <div className="textodash2"></div>
              <div className="barra">
                <BarraStatus
                  porcentagem={quantClicks}
                  texto={"Porcentage atual do Jogo"}
                  textoCentro={quantClicks}
                  percent={false}
                  tipo={2}
                />
                <BarraStatus
                  porcentagem={quantClicksUteis}
                  texto={"Foguetes destruídos"}
                  textoCentro={quantClicksUteis}
                  percent={false}
                  tipo={2}
                />
                <BarraStatus
                  porcentagem={quantRocketsDest}
                  texto={"Foguetes destruídos"}
                  textoCentro={quantRocketsDest}
                  percent={false}
                  tipo={2}
                />
                <BarraStatus
                  porcentagem={vidas}
                  texto={"Quantidade de vidas"}
                  textoCentro={`${vidas}${vidas < 2 ? "🤍" : "❤️"}`}
                  percent={false}
                  tipo={2}
                />
                <BarraStatus
                  porcentagem={quantRocketsDest}
                  texto={"Porcentage atual do Jogo"}
                  textoCentro={quantRocketsDest}
                  percent={true}
                  tipo={1}
                />
                <BarraStatus
                  porcentagem={Number(100 / (5 - fase))}
                  textoCentro={fase}
                  texto={"Fase"}
                  percent={false}
                  tipo={1}
                />
              </div>
            </div>
          </div>

          <div
            className="container"
            onClick={() =>
              setQuantClicks((prev) => (!telaInicial ? prev + 1 : prev))
            }
            ref={tamanhoAreaRef}
          >
            {armasTiros && <ArmasAtirando />}

            {vidas < 2 &&
              vidas > 0 &&
              (quantRocketsDest == 21 ||
                quantRocketsDest === 41 ||
                quantRocketsDest === 61) && (
                <Vidas
                  tamanhoArea={tamanhoArea}
                  setTamanhoArea={setTamanhoArea}
                  tamanhoAreaRef={tamanhoAreaRef}
                  setQuantRocketsDest={setQuantRocketsDest}
                  setQuantRockets={setQuantRockets}
                  setQuantClicks={setQuantClicks}
                  setQuantClicksUteis={setQuantClicksUteis}
                  quantRocketsDest={quantRocketsDest}
                  quantRockets={quantRockets}
                  quantClicks={quantClicks}
                  quantClicksUteis={quantClicksUteis}
                  pow={pow}
                  setPow={setPow}
                  levelUp={levelUp}
                  setLevelUp={setLevelUp}
                  velocidadeRocket={velocidadeRocket}
                  vidas={vidas}
                  setVidas={setVidas}
                  vidaExtra={vidaExtra}
                  setVidaExtra={setVidaExtra}
                />
              )}

            {nave && (
              <div className="nave" ref={aninNaveRef}>
                <img src="/nave2.png" alt="Nave" />
              </div>
            )}
            {/*<div className="muralha">
              <img src="/muralha3.png" alt="Muralha" />
            </div>*/}

            <Janela />

            {telaInicial ? (
              <TelaInicial
                setTelaInicial={setTelaInicial}
                setNave={setNave}
                somNaveTocar={somNaveTocar}
                somRadio1Tocar={somRadio1Tocar}
                telaInicial={telaInicial}
              />
            ) : (
              <>
                {pow && !gameOver && !telaInicial && (
                  <div className="rocketcaiu">
                    <img
                      src="/pow1.png"
                      alt="Pow!"
                      onClick={() => setPow(false)}
                    />
                  </div>
                )}

                {gameOver && (
                  <div className="rocketcaiu">
                    <img
                      src="/gameover.png"
                      alt="Game Over!"
                      onClick={() => {
                        setGameOver(false);
                        setTelaInicial(true);
                      }}
                    />
                  </div>
                )}

                {levelUp && (
                  <div className="rocketcaiu">
                    <img
                      src="/passoudefase.png"
                      alt="Level Up!"
                      onClick={() => setLevelUp(false)}
                    />
                  </div>
                )}

                {youWin && (
                  <div className="rocketcaiu">
                    <img
                      src="/youwin.png"
                      alt="You Win!"
                      onClick={() => {
                        setYouWin(false);
                        setTelaInicial(true);
                      }}
                    />
                  </div>
                )}

                {tamanhoArea.width > 0 && !levelUp && !youWin && rocket && (
                  <Rocket
                    tamanhoArea={tamanhoArea}
                    setTamanhoArea={setTamanhoArea}
                    tamanhoAreaRef={tamanhoAreaRef}
                    setQuantRocketsDest={setQuantRocketsDest}
                    setQuantRockets={setQuantRockets}
                    setQuantClicks={setQuantClicks}
                    setQuantClicksUteis={setQuantClicksUteis}
                    quantRocketsDest={quantRocketsDest}
                    quantRockets={quantRockets}
                    quantClicks={quantClicks}
                    quantClicksUteis={quantClicksUteis}
                    pow={pow}
                    setPow={setPow}
                    levelUp={levelUp}
                    setLevelUp={setLevelUp}
                    velocidadeRocket={velocidadeRocket}
                    vidas={vidas}
                    setVidas={setVidas}
                  />
                )}
              </>
            )}
          </div>
        </ClickpowStyled>
      </div>
    </DefaultPagsStyled>
  );
}
