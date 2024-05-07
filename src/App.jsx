import "./app.scss";
import Navbar from "./componentsnavbar/Navbar"
import Hero from "./hero/Hero";
import Parralax from "./parralax/Parralax";
import Portfolio from "./portfolio/Portfolio";
import Cursor from "./cursor/Cursor"
const App = () => {
  return <div>
    <Cursor/>
    <section id="Hem">
    
      <Navbar/>
      <Hero/>
    </section>
   
    <section id="Om"><Parralax type="Om"/></section>
    <section id="Portfolio"><Parralax type="portfolio"/></section>
    <Portfolio/>
    <section id="Kontakt">Contact</section>
    
    </div>;
};

export default App;
