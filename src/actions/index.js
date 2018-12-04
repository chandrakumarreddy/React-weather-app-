import axios from "axios";
const APIKEY = "7a70138c9c515489338c4c24e3dd8f0c";
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${APIKEY}`;

export const FETCHWEATHER = "FETCHWEATHER";
export const fetchWeather = async term => {
	const res = await axios.get(`${URL}&q=${term},us`);
	return {
		type: FETCHWEATHER,
		payload: res.data
	};
};

