import "./App.css";
import logo from "./assets/tza-logo.png";

function App() {
  const scrollToContent = () => {
    const section = document.getElementById("main-content");
    section?.scrollIntoView({ behavior: "smooth" });
  };

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
          <p className="tagline">
            Metalcore transmissions from the end of everything.
          </p>

          <div className="hero-buttons">
            <button>Listen</button>
            <button className="outline" onClick={scrollToContent}>
              Enter Site
            </button>
          </div>
        </div>
      </section>

  <section id="main-content" className="main-content">
  <div className="section-header">
    <p className="signal">TRANSMISSION ACTIVE</p>
    <h2>ENTER THE SIGNAL</h2>
  </div>

  <div className="section-grid">
    <article className="info-card">
      <span>01</span>
      <h3>Music</h3>
      <p>
        Listen to the latest transmissions, demos, riffs, and upcoming releases
        from Thee Zombie Apocalypse.
      </p>
      <button>Open Music</button>
    </article>

    <article className="info-card">
      <span>02</span>
      <h3>Bio</h3>
      <p>
        A solo metalcore project built around resilience, dystopian energy,
        and refusing to stay down.
      </p>
      <button>Read Bio</button>
    </article>

    <article className="info-card">
      <span>03</span>
      <h3>EPK</h3>
      <p>
        Press photos, artist info, release links, contact details, and media
        resources for booking or coverage.
      </p>
      <button>View EPK</button>
    </article>
  </div>
</section>
    </main>
  );
}

export default App;