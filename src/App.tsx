import "./App.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import FoodMenu from "./components/Menu/FoodMenu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <FoodMenu />
      <Gallery />
    </>
  );
}

export default App;
