import { ClickpowStyled } from "./ClickpowStyled";
import { DefaultPagsStyled } from "../DefaultPagsStyled";
import { useRef, useEffect, useState, use} from "react";
import Rocket from "./components/Rocket";

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

  const somYouWin = useRef(new Audio("/somlevelup.mp3"));

  const somYouWinTocar = () => {
    if (somYouWin.current) {
      somYouWin.current.currentTime = 0;
      somYouWin.current.play();
    }
  }

  const somRocketCaiu = useRef(new Audio("/caiu2.mp3"));
  const somRocketCaiuTocar = () => {
    if (somRocketCaiu.current) {
      somRocketCaiu.current.currentTime = 0;
      somRocketCaiu.current.play();
    }
  }

  const somLevelUp = useRef(new Audio("/somlevelup2.mp3"));
  const somLevelUpTocar = () => {
    if (somLevelUp.current) {
      somLevelUp.current.currentTime = 0;
      somLevelUp.current.play();
    }
  }

  useEffect(() => {
    if (levelUp) {
      somLevelUpTocar();
    }else {
      somLevelUp.current.pause();
      somLevelUp.current.currentTime = 0;
    }
  }
  , [levelUp]);

  useEffect(() => {
    setQuantClicksUteis(quantRocketsDest * 2)
  },[quantRocketsDest])

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
    if (quantRocketsDest == 20 || quantRocketsDest == 40 || quantRocketsDest == 60 || quantRocketsDest == 80) {
      setLevelUp(true);
    }
  }
  , [quantRocketsDest]);

  useEffect(() => {
    if (quantRocketsDest == 100) {
      setYouWin(true);
    }
  }
  , [quantRocketsDest]);

  useEffect(() => {
    if (youWin) {
      somYouWinTocar();
    }else {
      somYouWin.current.pause();
      somYouWin.current.currentTime = 0;
    }
  }
  , [youWin]);

  useEffect(() => {
    if (pow) {
      somRocketCaiuTocar();
    }else {
      somRocketCaiu.current.pause();
      somRocketCaiu.current.currentTime = 0;
    }
  }
  , [pow]);

  

  return (
    <DefaultPagsStyled>
  <div className="main">
    <ClickpowStyled>
      <div className="dashboard">
        <p>Tamanho da área: {tamanhoArea.width}</p>
        <p>Quantidade de cliques: {quantClicks}</p>
        <p>Quantidade de cliques úteis: {quantClicksUteis}</p>
        <p>Quantidade de foguetes destruídos: {quantRocketsDest}</p>
      </div>

      <div
        className="container"
        onClick={() => setQuantClicks((prev) => prev + 1)}
        ref={tamanhoAreaRef}
      >

        {telaInicial ? (
          <div className="telainicial">
            <div className="rockettexto" onClick={() => setTelaInicial(false)}>
              <img src="/rocket1.gif" alt="Rocket" />
              <img src="/clickpowtext.png" alt="Clickpow!" />
            </div>
          </div>
        ) : (
          <>
            {pow && (
              <div className="rocketcaiu">
                <img src="/pow1.png" alt="Pow!" onClick={() => setPow(false)} />
              </div>
            )}

            {levelUp && (
              <div className="rocketcaiu">
                <img src="/passoudefase.png" alt="Level Up!" onClick={() => setLevelUp(false)} />
              </div>
            )}

            {youWin && (
              <div className="rocketcaiu">
                <img src="/youwin.png" alt="You Win!" onClick={
                  () => 
                  {
                    setYouWin(false)
                  setTelaInicial(true)
                  }
                  } />
              </div>
            )}

            {tamanhoArea.width > 0 && (
              !levelUp && !youWin && (
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
              />)
            )}
          </>
        )}
        
      </div>
    </ClickpowStyled>
  </div>
</DefaultPagsStyled>

  );
}
