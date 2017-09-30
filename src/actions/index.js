import axios from 'axios';

const API_KEY='a574cf418ef4ac72e74597a3632dd3ce';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}q=${city},IN&appid=${API_KEY}`;
  const request=axios.get(url); //axios will always return a promise. So request here is a promise.

  console.log('request' : request);

  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
