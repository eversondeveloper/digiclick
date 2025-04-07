import { Card1Styled } from "./Card1Styled";

export default function Card1(props) {
  return (
    <Card1Styled className="cardconteiner">
      <div className="card">
        <a href={props.linkPag}>{props.imageIcon("#1F1F1F")}</a>
      </div>
    </Card1Styled>
  );
}
