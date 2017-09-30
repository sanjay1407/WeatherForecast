import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

  renderWeather(cityData){
    const name=cityData.city.name;
    const tempsInCelcius=cityData.list.map(weather => weather.main.temp-273); //Converts Kelvin to Celcius
    const pressures=cityData.list.map( weather => weather.main.pressure);
    const humidities=cityData.list.map( weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={ name }>
        <td><GoogleMap lat={ lat } long={ lon} /></td>
        <td>
          <Chart data= { tempsInCelcius } color ="green" units="C"/>
        </td>
        <td>
          <Chart data={ pressures } color="blue" units="hPa"/>
        </td>
        <td>
          <Chart data={ humidities } color="red" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
            { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
