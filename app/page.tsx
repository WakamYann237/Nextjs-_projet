import SearchBar from "./components/SearchBar";
import Navbar from "./components/navbar";
import Gallery1 from "./components/Images1";
import Gallery2 from "./components/Images2";
import Gallery3 from "./components/Images3";
import Gallery4 from "./components/Images4";
import Papaya from "./components/Papaya";
import VerticalNavbar from "./components/VerticalNavbar";
import Footer from "./components/footer";
import "./globals.css";
export default function Home() {
  return (
      <div>
        <SearchBar />
        <Gallery3/>
        <Papaya/>
        <Gallery4/>
        <Navbar />
        <Gallery1 />
        <Gallery2 />
        <VerticalNavbar/>
        <Footer/>
      </div>
      
      
   );
}