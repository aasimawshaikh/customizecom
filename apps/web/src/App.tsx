import { useState } from "react";

const occasions = ["Birthday", "Anniversary", "Wedding", "Just because"];
const recipients = ["Her", "Him", "Partner", "Friend", "Family"];

export default function App() {
  const [occasion, setOccasion] = useState("Birthday");
  const [recipient, setRecipient] = useState("Her");
  const [name, setName] = useState("");

  return (
    <main className="page-shell">
      <nav className="nav">
        <a className="brand" href="/" aria-label="CustomizeCom home">
          <span className="brand-mark">c.</span>
          <span>customize<span className="brand-light">com</span></span>
        </a>
        <span className="nav-note">Thoughtfully made, just for them</span>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">GIFTING, MADE PERSONAL</p>
          <h1>Not just a gift.<br /><em>A little piece of you.</em></h1>
          <p className="hero-description">
            Tell us about someone special. Build a hamper around their
            personality, your story, and the little things they love.
          </p>
          <div className="trust-line">
            <span aria-hidden="true">✳</span> Your idea. Your choices. Your one-of-a-kind hamper.
          </div>
        </div>

        <section className="starter-card" aria-labelledby="starter-title">
          <p className="card-step">LET'S MAKE SOMETHING MEANINGFUL</p>
          <h2 id="starter-title">Who are we celebrating?</h2>

          <label className="field-label" htmlFor="occasion">The occasion</label>
          <div className="choice-grid">
            {occasions.map((item) => (
              <button
                className={occasion === item ? "choice selected" : "choice"}
                key={item}
                onClick={() => setOccasion(item)}
                type="button"
                aria-pressed={occasion === item}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="field-label">Who is it for?</label>
          <div className="recipient-list">
            {recipients.map((item) => (
              <button
                className={recipient === item ? "recipient selected" : "recipient"}
                key={item}
                onClick={() => setRecipient(item)}
                type="button"
                aria-pressed={recipient === item}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="field-label" htmlFor="recipient-name">Their name (optional)</label>
          <input
            id="recipient-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Rabia"
            maxLength={80}
          />

          <button
            className="primary-button"
            onClick={() => {
              const query = new URLSearchParams({
                occasion,
                recipient,
                ...(name.trim() ? { name: name.trim() } : {}),
              });
              window.location.href = `/create?${query.toString()}`;
            }}
            type="button"
          >
            Start creating your gift <span aria-hidden="true">↗</span>
          </button>
          <p className="card-footnote">No ready-made hampers. Every gift starts with you.</p>
        </section>
      </section>

      <section className="how-section">
        <p className="eyebrow">A MORE THOUGHTFUL WAY TO GIFT</p>
        <h2>From a feeling to a gift.</h2>
        <div className="steps">
          <article><span>01</span><h3>Tell us about them</h3><p>Their interests, your occasion, and the feeling you want to share.</p></article>
          <article><span>02</span><h3>Build your hamper</h3><p>Choose products, a box, wrapping, and personal touches.</p></article>
          <article><span>03</span><h3>Make it meaningful</h3><p>Add a handwritten-style message and optional digital surprise.</p></article>
        </div>
      </section>
      <footer>Made with thought. Given with love. <span>CustomizeCom · Early preview</span></footer>
    </main>
  );
}
