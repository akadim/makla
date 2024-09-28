import "./App.scss";
import AboutUs from "./components/AboutUs/AboutUs";
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
    </>
  );
}

export default App;
