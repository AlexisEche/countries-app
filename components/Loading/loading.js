const loading = document.createElement("template");
loading.innerHTML = `
<style>
	@import "components/Loading/style.css";
</style>
<div class="lds__spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`;

class LoadingComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(loading.content.cloneNode(true));
	}

	connectedCallback() {
		this.render();
	}

	render() {}
}

window.customElements.define("loading-component", LoadingComponent);
