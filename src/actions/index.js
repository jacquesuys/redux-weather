import axios from 'axios';

const API_KEY = '4e1fe57b64f7d1a5267c93ee57acb684';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${URL}&q=${city},us`;
  const request = axios.get(url);
  // ^ resolves the promise and passes it as the payload
  return {type: FETCH_WEATHER, payload: request};
};