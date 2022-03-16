const footer = document.createElement("template");
footer.innerHTML = `
<style>
	@import "components/Footer/style.css";
</style>
<div class="footer">
	<p>&copy; Copyright 2022 Countries App </p> 
</div>`;

class FooterComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(footer.content.cloneNode(true));
	}

	connectedCallback() {
		this.render();
	}

	render() {}
}

window.customElements.define("footer-component", FooterComponent);
