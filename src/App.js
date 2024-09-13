import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        {/* Add other sections here as we implement them */}
      </main>
      <footer>{/* Implement footer */}</footer>
    </div>
  );
}

export default App;
