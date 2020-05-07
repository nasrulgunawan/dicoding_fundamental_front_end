class ApikNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <ul>
          <li>
            <a href="#home" class="nav-link active" data-title="">Home</a>
          </li>
          <li>
            <a href="#berita-nasional" class="nav-link" data-title="Nasional">Berita</a>
          </li>
          <li>
            <a href="#peta-penyebaran" class="nav-link" data-title="Penyebaran">Peta</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('apik-navbar', ApikNavbar);