import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const featuredArticles = [
  {
    tag: "EDITOR'S PICK",
    category: "DESIGN",
    title: "Designing a more human internet",
    author: "Sofia Chen",
    time: "6 min read",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
  {
    tag: "FEATURED",
    category: "TECHNOLOGY",
    title: "AI at work: let’s shape what’s next",
    author: "James Okafor",
    time: "8 min read",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
  },
  {
    tag: "FEATURED",
    category: "CREATIVITY",
    title: "Make room for your next great idea",
    author: "Emma Wilson",
    time: "5 min read",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
  },
];

const topics = [
  ["Technology", "128 articles", "#e3f0f4"],
  ["Design", "96 articles", "#eee8f5"],
  ["Business", "84 articles", "#e9f0e5"],
  ["Culture", "72 articles", "#f6eae1"],
  ["Personal growth", "63 articles", "#e2efed"],
];

const latestArticles = [
  {
    category: "WORK & LIFE",
    title: "The quiet power of doing one thing well",
    author: "Daniel Brooks",
    time: "4 min read",
  },
  {
    category: "BUSINESS",
    title: "Build a community, not just an audience",
    author: "Maya Patel",
    time: "7 min read",
  },
  {
    category: "CULTURE",
    title: "Why the best ideas cross disciplines",
    author: "Alex Morgan",
    time: "6 min read",
  },
];

const authors = [
  {
    name: "Sofia Chen",
    description: "Design & digital culture",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "James Okafor",
    description: "Technology & the future",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Emma Wilson",
    description: "Writing & creative work",
    image: "https://i.pravatar.cc/100?img=44",
  },
  {
    name: "Daniel Brooks",
    description: "Work & personal growth",
    image: "https://i.pravatar.cc/100?img=13",
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">L</span>
          <span>LUMEN</span>
        </Link>

        <div className="nav-links">
          <Link className="active" to="/">Home</Link>
          <a href="#featured">Articles</a>
          <a href="#latest">Blogs</a>
          <a href="#topics">Topics</a>
          <a href="#footer">About</a>
        </div>

        <div className="nav-actions">
          <div className="search-box">
            <span>⌕</span>
            <input placeholder="Search ideas, people..." />
            <small>⌘ K</small>
          </div>
          <Link to="/login" className="signin">Sign in</Link>
          <Link to="/signup" className="join-btn">Join Lumen</Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="eyebrow">A HOME FOR CURIOUS MINDS</span>

          <h1>
            Ideas worth sharing.
            <br />
            Knowledge worth discovering.
          </h1>

          <p>
            Publish your perspective, learn something new, and connect
            <br className="desktop-break" />
            with people who move knowledge forward.
          </p>

          <div className="hero-buttons">
            <a href="#featured" className="primary-btn">
              Explore Articles <span>→</span>
            </a>
            <Link to="/signup" className="secondary-btn">
              Start Writing
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-background"></div>
          <span className="visual-label">Made for discovery</span>

          <div className="journal-card">
            <span className="journal-brand">LUMEN JOURNAL</span>
            <div className="journal-line"></div>
            <h2>Good ideas<br />start here.</h2>
            <div className="journal-underline"></div>
            <div className="journal-line long"></div>
            <div className="journal-line medium"></div>
            <small>01 / A NEW PERSPECTIVE</small>
          </div>

          <div className="voice-card">
            <span className="voice-icon">✦</span>
            <div>
              <strong>Your voice matters.</strong>
              <small>Share what you know.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedArticles() {
  return (
    <section className="section featured-section" id="featured">
      <div className="section-heading">
        <h2>Featured articles</h2>
        <a href="#latest">View all articles →</a>
      </div>

      <div className="featured-grid">
        {featuredArticles.map((article, index) => (
          <article className="article-card" key={index}>
            <div className="article-image">
              <img src={article.image} alt={article.title} />
              <span className="article-tag">{article.tag}</span>
            </div>

            <div className="article-info">
              <span className="category">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.author} <span>·</span> {article.time}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExploreTopics() {
  return (
    <section className="topics-section" id="topics">
      <div className="section">
        <div className="section-heading">
          <h2>Explore topics</h2>
          <a href="#topics">Browse all topics →</a>
        </div>

        <div className="topics-grid">
          {topics.map(([name, count, color]) => (
            <a href="#latest" className="topic-card" key={name}>
              <span
                className="topic-dot"
                style={{ backgroundColor: color }}
              ></span>
              <strong>{name}</strong>
              <small>{count}</small>
              <span className="topic-arrow">›</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestArticles() {
  return (
    <section className="section latest-section" id="latest">
      <div className="section-heading">
        <h2>Latest articles</h2>
        <a href="#latest">See what's new →</a>
      </div>

      <div className="latest-grid">
        {latestArticles.map((article, index) => (
          <article className="latest-card" key={index}>
            <span className="latest-category">
              {article.category} / NOV 12, 2026
            </span>
            <h3>{article.title}</h3>
            <p>{article.author} <span>·</span> {article.time}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PopularAuthors() {
  return (
    <section className="section authors-section">
      <div className="section-heading">
        <h2>Popular authors</h2>
        <a href="#authors">Meet the community →</a>
      </div>

      <div className="authors-grid" id="authors">
        {authors.map((author) => (
          <div className="author-card" key={author.name}>
            <img src={author.image} alt={author.name} />
            <div className="author-details">
              <strong>{author.name}</strong>
              <small>{author.description}</small>
            </div>
            <button>Follow</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function CommunityBanner() {
  return (
    <section className="section">
      <div className="community-banner">
        <div>
          <h2>A little curiosity can lead to something great.</h2>
          <p>
            Find your people. Share your knowledge. Make your next
            connection on Lumen.
          </p>
        </div>

        <Link to="/signup" className="primary-btn">
          Join the community <span>→</span>
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section" id="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <strong>LUMEN</strong>
          <span>A brighter place for ideas.</span>
        </div>

        <div className="footer-links">
          <a href="#footer">About</a>
          <Link to="/signup">Write on Lumen</Link>
          <a href="#footer">Community guidelines</a>
          <a href="#footer">Help center</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Lumen CMS. All rights reserved.</span>
        <div>
          <a href="#footer">Privacy</a>
          <a href="#footer">Terms</a>
          <a href="#footer">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedArticles />
      <ExploreTopics />
      <LatestArticles />
      <PopularAuthors />
      <CommunityBanner />
      <Footer />
    </>
  );
}