const modal = document.createElement("template");
modal.innerHTML = `
<style>
@import "components/Modal/style.css";
</style>
	<button class="modal__buttonOpen" id="openModal">
		<slot name="buttonOpen"><h1>Default text</h1></slot>
	</button>
	<div class="modal">
		<div class="modal__content">
			<div class="modal__header">
				<slot name="header"><h1>Default text</h1></slot>
				<span class="modal__buttonClose">&times;</span>
			</div>
			<div class="modal__body">
				<slot><slot>
			</div>
		</div>
	</div>
		`;

class Modal extends HTMLElement {
	constructor() {
		super();
		this._modalVisible = false;
		this._modal;
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(modal.content.cloneNode(true));
	}
	connectedCallback() {
		this._modal = this.shadowRoot.querySelector(".modal");
		this.shadowRoot
			.getElementById("openModal")
			.addEventListener("click", this._showModal.bind(this));
		this.shadowRoot
			.querySelector(".modal__buttonClose")
			.addEventListener("click", this._hideModal.bind(this));
	}
	disconnectedCallback() {
		this.shadowRoot
			.getElementById("openModal")
			.removeEventListener("click", this._showModal);
		this.shadowRoot
			.querySelector(".modal__buttonClose")
			.removeEventListener("click", this._hideModal);
	}
	_showModal() {
		this._modalVisible = true;
		this._modal.style.display = "block";
	}
	_hideModal() {
		this._modalVisible = false;
		this._modal.style.display = "none";
	}
}
customElements.define("modal-component", Modal);
