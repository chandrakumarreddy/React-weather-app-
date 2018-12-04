import { combineReducers } from "redux";
import fetchWeather from "./fetchWeather";

const rootReducer = combineReducers({
	fetchWeather
});

export default rootReducer;
