import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Appetizers from "./components/Appetizers";
import SeaFood from "./components/SeaFood";
import Meats from "./components/Meats";
import Cocktails from "./components/Cocktails";
import WineList from "./components/Wine List";
import Menus from "./components/Menus"
import scrollreveal from "scrollreveal";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #menus,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Menus />
      <Appetizers />
      <SeaFood />
      <Meats />
      <Cocktails />
      <WineList />
      <Newsletter />
      <Footer />
    </>
  );
}