import "./styles/App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
