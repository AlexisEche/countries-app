import { getCountries } from "./services/countriesServices.js";

async function renderCountries() {
	let countries = await getCountries("v3.1/lang/spa", {});
	let selectedCountries = countries.slice(0, 12);

	let html = `
  <style>
    @import "styles/index.css";
  </style>
  `;

	selectedCountries.map((country) => {
		const { cca2, name, capital, flag, continents, flags, population } =
			country;
		let htmlSegment = `<div class="flex-center" >
                          <country-card
                            id=${cca2}
                            name="${name.common}"
                            capital="${capital}"
                            flag=${flag}
                            continent=${continents[0]}
                            country-image=${flags.png}
                            population=${population}
                        />
                      </div>
  `;
		html += htmlSegment;
	});

	let container = document.getElementById("main");
	container.innerHTML = html;
}

renderCountries();
