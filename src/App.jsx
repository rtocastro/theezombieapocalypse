import "./App.css";
import logo from "./assets/tza-logo.png";

function App() {
  const scrollToContent = () => {
    const section = document.getElementById("main-content");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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

      <nav className="site-nav">
  <button onClick={() => scrollToSection("main-content")}>Signal</button>
  <button onClick={() => scrollToSection("music")}>Music</button>
  <button onClick={() => scrollToSection("bio")}>Bio</button>
  <button onClick={() => scrollToSection("epk")}>EPK</button>
</nav>

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
            <button
              onClick={() =>
                document.getElementById("music")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Open Music
            </button>
          </article>

          <article className="info-card">
            <span>02</span>
            <h3>Bio</h3>
            <p>
              A solo metalcore project built around resilience, dystopian energy,
              and refusing to stay down.
            </p>
            <button
              onClick={() =>
                document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Read Bio
            </button>
          </article>

          <article className="info-card">
            <span>03</span>
            <h3>EPK</h3>
            <p>
              Press photos, artist info, release links, contact details, and media
              resources for booking or coverage.
            </p>
            <button
              onClick={() =>
                document.getElementById("epk")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View EPK
            </button>
          </article>
        </div>
      </section>

      <section id="music" className="music-section">
        <div className="section-header">
          <p className="signal">AUDIO TRANSMISSION</p>
          <h2>MUSIC</h2>
        </div>

        <div className="music-layout">
          <div className="music-copy">
            <p className="eyebrow">LATEST RELEASE</p>
            <h3>RELENTLESS</h3>
            <p>
              A motivational metalcore transmission about getting back up, pushing
              forward, and refusing to let the signal die.
            </p>

            <div className="music-actions">
              <button
                onClick={() =>
                  window.open("https://open.spotify.com/track/06Ugaony8k8HFTNGxy7DzB", "_blank")
                }
              >
                Listen on Spotify
              </button>

              <button
                className="outline"
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=PH7gaKgQgnA", "_blank") // replace later
                }
              >
                Watch on YouTube
              </button>
            </div>
          </div>

          <div className="embed-card">
            <iframe
              title="Relentless Spotify Embed"
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/06Ugaony8k8HFTNGxy7DzB?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="bio" className="bio-section">
        <div className="section-header">
          <p className="signal">ORIGIN FILE</p>
          <h2>BIO</h2>
        </div>

        <div className="bio-layout">
          <div className="bio-card">
            <p className="eyebrow">THEE ZOMBIE APOCALYPSE</p>
            <h3>Built from frustration. Powered by resilience.</h3>

            <p>
              Thee Zombie Apocalypse is a solo metalcore project from Rick Torres,
              blending heavy riffs, dystopian energy, and motivational themes into
              songs about getting back up when life tries to keep you down.
            </p>

            <p>
              Rooted in Van Nuys and shaped by DIY creativity, the project combines
              music, visual storytelling, and glitch-heavy digital aesthetics into one
              evolving signal.
            </p>
          </div>

          <div className="bio-stats">
            <div>
              <span>01</span>
              <p>Solo metalcore project</p>
            </div>

            <div>
              <span>02</span>
              <p>Glitch / dystopian visual identity</p>
            </div>

            <div>
              <span>03</span>
              <p>Motivational heavy music</p>
            </div>

            <div>
              <span>04</span>
              <p>Based in Van Nuys, California</p>
            </div>
          </div>
        </div>
      </section>

      <section id="epk" className="epk-section">
        <div className="section-header">
          <p className="signal">PRESS KIT</p>
          <h2>EPK</h2>
        </div>

        <div className="epk-layout">
          <div className="epk-card epk-main">
            <p className="eyebrow">ELECTRONIC PRESS KIT</p>
            <h3>For press, booking, and collaborators.</h3>
            <p>
              Downloadable assets, release information, artist bio, music links,
              visuals, and contact details for Thee Zombie Apocalypse.
            </p>

            <div className="epk-actions">
              <button>Download EPK</button>
              <button className="outline">Contact</button>
            </div>
          </div>

          <div className="epk-card">
            <span>01</span>
            <h4>Artist Bio</h4>
            <p>Short and long-form bio for press, playlists, venues, and media.</p>
          </div>

          <div className="epk-card">
            <span>02</span>
            <h4>Press Photos</h4>
            <p>Promo images, logos, artwork, and social-ready visuals.</p>
          </div>

          <div className="epk-card">
            <span>03</span>
            <h4>Music Links</h4>
            <p>Streaming, YouTube, release pages, and featured tracks.</p>
          </div>
        </div>
      </section>

    </main>


  );
}

export default App;