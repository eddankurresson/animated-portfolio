import "./app.scss";
import Navbar from "./componentsnavbar/Navbar"
import Sidebar from "./sidebar/sidebar";
const App = () => {
  return <div>
    <section id="Hem">
    
      <Navbar/>

    </section>

    <section><a href="">Hello</a></section>
    <section id="Tjänster">Parralax</section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Kontakt">Contact</section>
    <section id="Om">Om</section>
    </div>;
};

export default App;
