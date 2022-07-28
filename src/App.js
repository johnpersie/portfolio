import About from "./components/about/About";
import Contact from "./components/contact/index";
import Footer from "./components/Footer/Footer";
import Landpage from "./components/LandingPage/Landpage";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project";
import Service from "./components/service";
import Skills from "./components/Skills/Skills";

import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Landpage />
      <About />
      <Service />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
