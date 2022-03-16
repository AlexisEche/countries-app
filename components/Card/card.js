const card = document.createElement("template");
card.innerHTML = `
<style>
	@import "components/Card/style.css";
</style>
<div class="countryCard">
	<img class="countryCard__image"/>
  <div>
    <div class="countryCard__details">
		<span>
		País:</span>
			<modal-component> 
				<div slot="buttonOpen" class="countryCard__details_openModal">
					<slot  class="countryCard__details_subtitle countryCard__details_openModal" name="name"/>
				</div>
				<h1 slot="header">Información Adicional 	<span><slot name="flag"/></span></h1>
				<p>Capital: <slot name="capital"/></p>
				<p>Continente al que pertenece: <slot name="continent"/></p>
			</modal-component>
      <p>N° Habitantes: <slot class="countryCard__details_subtitle" name="population" /></p>
      <p>Code: <slot class="countryCard__details_subtitle" name="id"/></p>
		</div>
</div>`;

class CountryCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(card.content.cloneNode(true));
		this.shadowRoot.querySelector('slot[name="id"]').innerText =
			this.getAttribute("id");
		this.shadowRoot.querySelector('slot[name="capital"]').innerText =
			this.getAttribute("capital");
		this.shadowRoot.querySelector('slot[name="name"]').innerText =
			this.getAttribute("name");
		this.shadowRoot.querySelector('slot[name="flag"]').innerText =
			this.getAttribute("flag");
		this.shadowRoot.querySelector('slot[name="continent"]').innerText =
			this.getAttribute("continent");
		this.shadowRoot.querySelector('slot[name="population"]').innerText =
			this.getAttribute("population");
		this.shadowRoot.querySelector("img").src =
			this.getAttribute("country-image");
	}

	connectedCallback() {
		this.render();
	}

	render() {}
}

window.customElements.define("country-card", CountryCard);
