//Lista de todos los viajes realizados y su información de huella de CO2
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Trip from '../../components/Trip/Trip.jsx';
import { Table } from 'react-bootstrap';

//url for testing: http://localhost:8000//travel-log/v1/travels/

const TripsLogged = (props) => {
  const [tripsState, setTripsState] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/travel-log/v1/travels/`)
    .then(res => {
      const travels = res.data.data.travels;
      setTripsState(travels);
    })
  }, [])

  console.log(tripsState);
  const rederedTrips = tripsState.map(trip => {
    return (
      <Trip key={trip._id} id={trip._id} travelFrom={trip.travelFrom} travelTo={trip.travelTo} transport={trip.transport} kmTraveled={trip.kmTraveled} workersNames={trip.workersNames} logAuthor={trip.logAuthor} roundTrip={trip.roundTrip ? "Sí" : "No"} />
    )
  })

  return (
    <section>
      <h1>Lista de viajes registrados</h1>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Desde</th>
            <th>Hacia</th>
            <th>Transporte</th>
            <th>Kms</th>
            <th>Trabajadores</th>
            <th>Autor del registro</th>
            <th>¿Ida y vuelta?</th>
          </tr>
        </thead>
        <tbody>
          {rederedTrips}
        </tbody>
      </Table>
    </section>
  );
}

export default TripsLogged;