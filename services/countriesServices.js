const API_URL = "https://restcountries.com/";

const fetchData = async (url, options = {}) => {
	try {
		const res = await fetch(API_URL + url, {
			headers: {
				"Content-Type": "application/json",
			},
			...options,
		});
		return await res.json();
	} catch (error) {
		console.error(error);
	}
};

export const getCountries = (url, params) => {
	const urlParams =
		params &&
		Object.entries(params)
			.reduce((acc, [name, value]) => `${acc}${name}=${value}&`, "?")
			.slice(0, -1);
	return fetchData(url + urlParams);
};
