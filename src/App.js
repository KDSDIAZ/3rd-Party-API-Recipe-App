import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import { GiCookingPot } from "react-icons/gi";
import HeroSection from "./components/HeroSection";
import './color.css';

function App() {
  return (
    <div className="flex flex-col justify-items-center items-center">
      <BrowserRouter>
        <div className="flex mt-10 items-center">
          <GiCookingPot size={52} className="brandColor" />
          <Link className="text-white text-2xl" to={'/'}>Recipe <span className="brandColor">Generator</span> </Link>
        </div>
        <HeroSection />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
