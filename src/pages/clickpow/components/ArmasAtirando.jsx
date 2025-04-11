import { useEffect, useState } from "react";
import { ArmasAtirandoStyled } from "./ArmasAtirandoStuled";

export default function ArmasAtirando() {
  const [pos1, setPos1] = useState(5);
  const [pos2, setPos2] = useState(30);
  const [pos3, setPos3] = useState(50);
  const [pos4, setPos4] = useState(80);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPos1(Math.floor(Math.random() * 100));
    }, 500);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPos2(Math.floor(Math.random() * 100));
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPos3(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPos4(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <ArmasAtirandoStyled pos1={pos1} pos2={pos2} pos3={pos3} pos4={pos4}>
      <div className="projetil anin1"></div>
      <div className="projetil anin2"></div>
      <div className="projetil anin3"></div>
      <div className="projetil anin4"></div>
    </ArmasAtirandoStyled>
  );
}
