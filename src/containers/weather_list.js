import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather({city, list}) {
    if (!city || !list) {
      return (
        <tr>
          <td cospan="4">No city added</td>
        </tr>
      );
    }

    const name = city.name;
    const temperature = list.map(({main}) => main.temp);
    const pressure = list.map(({main}) => main.pressure);
    const humidity = list.map(({main}) => main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temperature} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPA" />
        </td>
        <td>
          <Chart data={humidity} color="red" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    const headings = ['City', 'Temperature (K)', 'Pressure (hPA)', 'Humidity (%)'];

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            {headings.map(heading => <th key={heading}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
};

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);