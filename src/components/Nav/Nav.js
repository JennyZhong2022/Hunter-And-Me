import "./Nav.css";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

const Nav = () => {
  const goFacebook = () => {
    window.open("https://www.facebook.com/jessica.liu.5268");
  };

  const goInstagram = () => {
    window.open("https://www.instagram.com/lyeeeee0225/");
  };

  const [scrollPositions, setScrollPositions] = useState({});

  useEffect(() => {
    const calculateScrollPositions = () => {
      const positions = {
        home: 0,
        about: document.getElementById("about").offsetTop,
        growth: document.getElementById("growth").offsetTop,
        reviews: document.getElementById("reviews").offsetTop,
        contact: document.getElementById("contact").offsetTop,
      };
      setScrollPositions(positions);
    };

    // Recalculate scroll positions on resize
    window.addEventListener("resize", calculateScrollPositions);
    calculateScrollPositions(); // Initial calculation

    return () => {
      window.removeEventListener("resize", calculateScrollPositions);
    };
  }, []);

  const handleSpanClick = (event) => {
    const target = event.currentTarget.getAttribute("data-target");
    const newY = scrollPositions[target];
    window.scrollTo({
      top: newY,
      behavior: "smooth",
    });
  };

  return (
    <div className="navContainer">
      <div className="leftText">
        <span data-target="home" onClick={handleSpanClick}>
          Hunter's Garden
        </span>
      </div>
      <div className="middleText">
        <span data-target="home" onClick={handleSpanClick}>
          Home
        </span>
        <span data-target="about" onClick={handleSpanClick}>
          About
        </span>
        <span data-target="growth" onClick={handleSpanClick}>
          Hunter's growth
        </span>
        <span data-target="reviews" onClick={handleSpanClick}>
          Reviews
        </span>
        <span data-target="contact" onClick={handleSpanClick}>
          Contact
        </span>
      </div>
      <div className="links">
        <span onClick={goFacebook}>
          <UilFacebookF color="white" />
        </span>
        <span onClick={goInstagram}>
          <UilInstagram color="white" />
        </span>
      </div>
    </div>
  );
};

export default Nav;
