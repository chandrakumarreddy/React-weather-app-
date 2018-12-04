import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/searchBar";
import { fetchWeather } from "../actions";

class searchBar extends React.Component {
	formData = term => this.props.fetchWeather(term);
	render() {
		return (
			<div>
				<SearchBar formSubmit={this.formData} />
			</div>
		);
	}
}

export default connect(
	null,
	dispatch => ({
		fetchWeather: term => dispatch(fetchWeather(term))
	})
)(searchBar);
