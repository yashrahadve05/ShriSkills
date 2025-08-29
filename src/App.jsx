import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </main>
  );
};

export default App;
