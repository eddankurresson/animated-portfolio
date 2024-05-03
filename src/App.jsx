import "./app.scss";
import Navbar from "./componentsnavbar/Navbar"
import Sidebar from "./sidebar/sidebar";
import Hero from "./hero/Hero";
import Parralax from "./parralax/Parralax";
const App = () => {
  return <div>
    <section id="Hem">
    
      <Navbar/>
      <Hero/>
    </section>
   
    <section id="Om"><Parralax type="Om"/></section>
    <section id="Portfolio"><Parralax type="portfolio"/></section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Kontakt">Contact</section>
    
    </div>;
};

export default App;
