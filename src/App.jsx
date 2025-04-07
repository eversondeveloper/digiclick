import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyled";
import Home from "./pages/home/Home.jsx";
import Clickpow from "./pages/clickpow/Clickpow.jsx";
import Header from "./Components/tagsdefault/Header.jsx";
import Footer from "./Components/tagsdefault/Footer.jsx";
import Keypow from "./pages/keypow/Keypow.jsx";

function App() {
  return (
    <AppStyled>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="clickpow" element={<Clickpow />} />
          <Route path="keypow" element={<Keypow />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppStyled>
  );
}

export default App;
