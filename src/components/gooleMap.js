import React from "react";

export default class gooleMap extends React.PureComponent {
	componentDidMount() {
		var myLatLng = { lat: this.props.lat, lng: this.props.long };

		var map = new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: myLatLng
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			draggable: true,
			animation: google.maps.Animation.DROP,
			title: this.props.city
		});
	}
	render() {
		return <div ref="map" />;
	}
}
