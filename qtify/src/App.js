import Navbar from "../src/components/Navbar/Navbar"
import './App.css';
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
