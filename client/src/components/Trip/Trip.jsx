//Un viaje con su información detallada
import React from 'react';
import style from './Trip.module.css';

const Trip = (props) => {
  return (
    <tr>
      <td>{props.travelFrom}</td>
      <td>{props.travelTo}</td>
      <td>{props.transport}</td>
      <td>{props.kmTraveled}</td>
      <td>{props.workers}</td>
      <td>{props.logAuthor}</td>
      <td>{props.roundTrip}</td>
      <td>{props.CO2byWorker}</td>
      <td>{props.totalCO2}</td>
    </tr>
  );
}

export default Trip;