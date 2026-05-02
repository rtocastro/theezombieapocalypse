import "./App.css";
import logo from "./assets/tza-logo.png";


function App() {
  return (
    <main className="app">
      <section className="landing">
        <div className="noise"></div>
        <div className="scanlines"></div>

<div className="logo-shell">
  <img src={logo} alt="Thee Zombie Apocalypse Logo" className="tza-logo" />
  <div className="jade-burst"></div>
</div>

        <div className="hero-content">
          <p className="signal">SIGNAL RECEIVED</p>
          <h1>THEE ZOMBIE APOCALYPSE</h1>
          <p className="tagline">Metalcore transmissions from the end of everything.</p>

          <div className="hero-buttons">
            <button>Listen</button>
            <button className="outline">Enter Site</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;