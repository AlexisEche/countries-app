const navbar = document.createElement("template");
navbar.innerHTML = `
<style>
	@import "components/Navbar/style.css";
</style>
<div class="navbar">
	<div>
		<slot name="navbartitle"/>
	</div>
  <img class="navbar__logo"/>
</div>`;

class NavbarComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(navbar.content.cloneNode(true));
		this.shadowRoot.querySelector('slot[name="navbartitle"]').innerText =
			this.getAttribute("navbartitle");
		this.shadowRoot.querySelector("img").src = this.getAttribute("logo");
	}

	connectedCallback() {
		this.render();
	}

	render() {}
}

window.customElements.define("navbar-component", NavbarComponent);
