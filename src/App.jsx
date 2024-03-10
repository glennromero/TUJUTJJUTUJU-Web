import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Section 1/Hero";
import Stats from "./Components/Section 2/Stats";
import WhyUs from "./Components/Section 3/WhyUs";
import Catalog from "./Components/Section 4/Catalog";
import './App.css'
import { useEffect } from "react";


const App = () => {

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []); // Run this effect only once, on component mount

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyUs />
      <Catalog />
      <Footer />
    </>
  )
}

export default App;