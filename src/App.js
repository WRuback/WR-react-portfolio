

function App() {
  return (
    <>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <h1>William Ruback</h1>
          </a>

          <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">

          </div>

          <div className="navbar-end">
            <button className="navbar-item">
              Home
            </button>
            <button className="navbar-item">
              Projects
            </button>
            <button className="navbar-item">
              Contact
            </button>
            <button className="navbar-item">
              Resume
            </button>
          </div>
        </div>
      </nav>
      <section class="hero is-large is-link">
        <div class="hero-body">
          <p class="title">
            William Ruback
          </p>
          <p class="subtitle">
            Full-Stack Web Developer
          </p>
        </div>
      </section>
      <footer class="footer is-dark">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
