import React from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GooleMap from "../components/gooleMap";

export class weatherList extends React.Component {
	renderCities = cityData => {
		const city = cityData.city.name;
		const temps = cityData.list.map(temp => temp.main.temp);
		const humids = cityData.list.map(humid => humid.main.humidity);
		const pressurs = cityData.list.map(press => press.main.pressure);
		const { lat, lon } = cityData.city.coord;
		return (
			<tr key={city}>
				<td>
					<GooleMap lat={lat} long={lon} city={city} />
				</td>
				<td>
					<Chart data={temps} color="orange" units="K" />
				</td>
				<td>
					<Chart data={humids} color="blue" units="hPa" />
				</td>
				<td>
					<Chart data={pressurs} color="green" units="%" />
				</td>
			</tr>
		);
	};
	render() {
		return (
			<table className="table ">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderCities)}</tbody>
			</table>
		);
	}
}

export default connect(state => ({ weather: state.fetchWeather }))(weatherList);
