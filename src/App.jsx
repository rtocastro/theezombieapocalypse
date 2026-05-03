import "./App.css";
import logo from "./assets/tza-logo.png";
import meSide from "./assets/meside.png";
import meGlasses from "./assets/meglasses.png";
import GlitchParticles from "./components/GlitchParticles";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";


function App() {

  const formatTime = (timestamp) => {
    if (!timestamp) return "--:--:--";

    const date = timestamp.toDate(); // Firestore → JS Date

    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };


  const scrollToContent = () => {
    setShowNav(true);
    const section = document.getElementById("main-content");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id, message) => {
    if (message) logEvent(message);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const logEvent = async (message) => {
    try {
      await addDoc(collection(db, "transmissionLogs"), {
        message,
        createdAt: serverTimestamp()
      });
    } catch (err) {
      console.error("Log failed:", err);
    }
  };

  const [logs, setLogs] = useState([]);
  const latestLogs = logs.slice(0, 3);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "transmissionLogs"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLogs(data);
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const landing = document.querySelector(".landing");

      if (!landing) return;

      const landingBottom = landing.getBoundingClientRect().bottom;

      setShowNav(landingBottom <= 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="app">
      <section className="landing">
        <div className="noise"></div>
        <div className="scanlines"></div>
        <GlitchParticles />

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

          <div className="hero-buttons" onClick={() => { logEvent("USER LISTENED"); onClick=() =>
                  window.open("https://open.spotify.com/track/06Ugaony8k8HFTNGxy7DzB", "_blank") }} >
            <button>Listen</button>
            <button
              className="outline"
              onClick={() => {
                logEvent("USER ENTERED SITE");
                scrollToContent();
              }}
            >
              Enter Site
            </button>
          </div>
        </div>
      </section>

      <nav className={`site-nav ${showNav ? "site-nav-visible" : ""}`}>
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
            <button onClick={() => scrollToSection("music", "MUSIC OPENED")}>
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
            <button onClick={() => scrollToSection("bio", "BIO OPENED")}>
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
            <button onClick={() => scrollToSection("epk", "EPK OPENED")}>
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


      <section id="extras" className="extras-section">
        <div className="section-header">
          <p className="signal">UNLISTED TRANSMISSION</p>
          <h2>BEHIND THE SIGNAL</h2>
        </div>

        <div className="extras-layout">
          <div className="extras-copy">
            <h3>BMo Transmission</h3>
            <p>
              A rare unlisted transmission. Not part of the official release cycle —
              just a glimpse behind the signal.
            </p>
          </div>

          <div className="embed-card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/68gGBAi96fc?si=-ivpq7nbVLdV-vbR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
            <h3>Thee Zombie Apocalypse</h3>

            <p>
              A solo metalcore project blending heavy, melodic intensity with themes of resilience, self-empowerment, and creative independence.
            </p>

            <p>
              Built from a DIY foundation, Thee Zombie Apocalypse combines music, visual design, and code into a cohesive dystopian transmission experience.
            </p>

            <div className="epk-actions">
              <button
                onClick={() => window.open("/epk.pdf", "_blank")}
              >
                Download EPK
              </button>

              <button
                className="outline"
                onClick={() =>
                  window.location.href =
                  "mailto:theezombieapocalypse@gmail.com?subject=TZA%20Inquiry&body=Hello%20Rick,%0A%0AI'm%20reaching%20out%20regarding..."
                }
              >
                Contact / Booking
              </button>
            </div>
            <div className="epk-contact">
              <p>Socials</p>

              <div className="contact-links">

                <a
                  href="https://www.instagram.com/TheeZombieApocalypse"
                  target="_blank"
                  rel="noreferrer"
                >Instagram
                </a>
                <a
                  href="https://www.threads.net/@TheeZombieApocalypse"
                  target="_blank"
                  rel="noreferrer"
                >
                  Threads
                </a>
                <a
                  href="https://www.youtube.com/@TheeZombieApocalypse"
                  target="_blank"
                  rel="noreferrer">
                  YouTube
                </a>
                <a href="https://open.spotify.com/artist/5WoNw2uRhhHTCOwUeQAaas"
                  target="_blank"
                  rel="noreferrer">
                  Spotify
                </a>
              </div>
            </div>
          </div>

          <div className="epk-card">
            <span>01</span>
            <h4>Artist Bio</h4>
            <p>
              Thee Zombie Apocalypse is a solo project by Rick Torres, delivering high-energy metalcore rooted in resilience, creativity, and real-life experience.
            </p>
          </div>

          <div className="epk-card">
            <span>02</span>
            <h4>Press & Media</h4>
            <p>
              Promo images, branding, and visual assets for press features,
              interviews, and collaborations.
            </p>

            <div className="press-gallery">
              <img src={meSide} alt="Rick Torres promo portrait side profile" />
              <img src={meGlasses} alt="Rick Torres promo portrait with glasses" />
            </div>
          </div>

          <div className="epk-card">
            <span>03</span>
            <h4>Music & Links</h4>
            <p>
              Available on YouTube and streaming platforms. Featuring original releases including “Relentless” and upcoming projects.
            </p>
          </div>

        </div>
      </section>

      <div className="signal-ticker">
        <div className="ticker-track">
          {latestLogs.map((log) => (
            <span key={log.id}>
              ⚡ [{formatTime(log.createdAt)}] {log.message || "Unknown transmission"}
            </span>
          ))}

          {latestLogs.map((log) => (
            <span key={`${log.id}-copy`}>
              ⚡ [{formatTime(log.createdAt)}] {log.message || "Unknown transmission"}
            </span>
          ))}
        </div>
      </div>
    </main>


  );
}

export default App;