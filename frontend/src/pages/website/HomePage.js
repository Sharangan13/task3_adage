import Middlebar from "../../layouts/Middlebar";
import Navbar from "../../layouts/Navbar";
import Home from "../Home";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";
import Page4 from "../Page4";
import Page5 from "../Page5";
import Page6 from "../Page6";
import Page7 from "../Page7";

function HomePage() {
  return (
    <div>
    <div className="home_page_new">
      <Navbar />
      <Home />
      
    </div>
    <Middlebar/>
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
    
    </div>
  );
}

export default HomePage;
