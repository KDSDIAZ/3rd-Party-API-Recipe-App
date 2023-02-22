import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiCookingPot } from "react-icons/gi";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Nav>
          <GiCookingPot id="logoPic" />
          <Logo to={'/'}>Recipe <span>Generator</span> </Logo>
        </Nav>
        <HeroSection />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </Main>
  );
}

const Main = styled.div`

display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
`;

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
color: white;

span{
  color: #FF725E;
}
`;

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: center;
align-items: center;

svg{
  font-size: 2rem;
}

#logoPic{
  color: #FF725E;
}

`;


export default App;
