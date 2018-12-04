import React from "react";

export default class SearchBar extends React.Component {
	state = {
		term: ""
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.formSubmit(this.state.term);
	};
	handelChange = e => this.setState({ term: e.target.value });
	render() {
		return (
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Get a five day forecast in your favourite cities"
					value={this.state.term}
					onChange={this.handelChange.bind(this)}
					className="form-control"
				/>
				<button className="btn btn-secondary" type="submit">
					search
				</button>
			</form>
		);
	}
}
