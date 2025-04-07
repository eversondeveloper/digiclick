import { ClickpowStyled } from "./ClickpowStyled";
import { DefaultPagsStyled } from "../DefaultPagsStyled";
import { useRef, useEffect, useState} from "react";
import Rocket from "./components/Rocket";

export default function Clickpow() {
  const [tamanhoArea, setTamanhoArea] = useState({ width: 0, height: 0 });
  const tamanhoAreaRef = useRef(null);
  const [quantRocketsDest, setQuantRocketsDest] = useState(0);
  const [quantRockets, setQuantRockets] = useState(0);
  const [quantClicks, setQuantClicks] = useState(0);
  const [quantClicksUteis, setQuantClicksUteis] = useState(0);
  const [pow, setPow] = useState(false);

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
            onClick={() => {
              setQuantClicks((prev) => prev + 1);
            }}
            ref={tamanhoAreaRef}
          >
            {pow && (
               <div className="rocketcaiu">
               <img src="/public/pow1.png" alt="Pow!" onClick={()=>{setPow(false)}} />
             </div>)
             }
            {tamanhoArea.width > 0 && (
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
              />
            )}
          </div>
        </ClickpowStyled>
      </div>
    </DefaultPagsStyled>
  );
}
