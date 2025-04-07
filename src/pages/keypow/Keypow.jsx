import { DefaultPagsStyled } from "../DefaultPagsStyled";
import { KeypowStyled } from "./KeypowStyled";
import { useEffect } from "react";

export default function Keypow() {

  useEffect(() => {
    document.title = "Keypow";
  }, []);

  return (
    <DefaultPagsStyled>
      <div className="main">
        <KeypowStyled>
          <h1>Keypow</h1>
          <p>
            Keypow is a game where you have to press the keys on the keyboard as
            fast as possible.
          </p>
          <p>Click on the button below to start the game.</p>
        </KeypowStyled>
      </div>
    </DefaultPagsStyled>
  );
}
