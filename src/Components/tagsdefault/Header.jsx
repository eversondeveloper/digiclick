import { HeaderStyled } from "./HeaderStyled";
import { logo1 } from "../imageicons";

export default function Header(){
    return <HeaderStyled>
        <div className="logomenu">
            <div className="logocontainer">
                <a className="logo" href="/">{logo1()}</a>
            </div>
            <nav className="menu">
                <a href="/">Home</a>
                <a href="/clickpow">Clickpow</a>
                <a href="/keypow">Keypow</a>
            </nav>
        </div>
    </HeaderStyled>
}