import { useState } from "react";
import { BarraStatusStyled } from "./BarraStatusStyled";

export default function BarraStatus(props) {
  let porcentagem = Number((Number(props.porcentagem / 100) * 360).toFixed(2));

  const [corBarraGeral, setCorBarraGeral] = useState("#2D3038");
  const [corBarra, setCorBarra] = useState("#C168D8");
  const [corFundoBarra, setCorFundoBarra] = useState("#2d3038");
  const [corCentro, setCorCentro] = useState("#2D3038");

  return (
    <BarraStatusStyled>
      <div className="textobarra">{props.texto}</div>
      {props.tipo == 1 ? (
        <>
          <div className="barrageral" style={{ color: corBarraGeral }}>
            <div
              className="divcirculo1"
              style={{
                background: `conic-gradient(${corBarra} ${porcentagem}deg, ${corFundoBarra} ${porcentagem}deg ${porcentagem}deg)`,
              }}
            >
              <div
                className="divcirculo2"
                style={{
                  backgroundColor: corBarraGeral,
                }}
              >
                {props.textoCentro}
                {props.percent && "%"}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="barrageral2">

            {props.textoCentro}
            
          </div>
        </>
      )}
    </BarraStatusStyled>
  );
}
