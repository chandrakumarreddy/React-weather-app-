import { FETCHWEATHER, CLEARDATA } from "../actions";

export default function(state = [], action) {
	switch (action.type) {
		case FETCHWEATHER:
			return [...state, action.payload];
		case CLEARDATA:
			return [];
		default:
			return state;
	}
}
