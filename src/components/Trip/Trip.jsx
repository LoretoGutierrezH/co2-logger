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
      <td>{props.workersNames}</td>
      <td>{props.logAuthor}</td>
      <td>{props.roundTrip}</td>
    </tr>
  );
}

export default Trip;