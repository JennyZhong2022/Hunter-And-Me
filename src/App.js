import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Growth from "./components/GrowthPage/Growth";
import Review from "./components/ReviewPage/Review";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Growth />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
