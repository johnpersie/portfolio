import About from "./components/about/About";
import Landpage from "./components/LandingPage/Landpage";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Landpage />
      <About />
    </>
  );
}

export default App;
