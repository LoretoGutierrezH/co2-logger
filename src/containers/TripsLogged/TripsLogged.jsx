//Lista de todos los viajes realizados y su información de huella de CO2
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Trip from '../../components/Trip/Trip.jsx';
import { Table, Button } from 'react-bootstrap';


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
      <Trip key={trip._id} id={trip._id} travelFrom={trip.travelFrom} travelTo={trip.travelTo} transport={trip.transport} kmTraveled={trip.kmTraveled} workers={trip.workers} logAuthor={trip.logAuthor} roundTrip={trip.roundTrip ? "Sí" : "No"} CO2byWorker={trip.CO2byWorker} totalCO2={trip.totalCO2} />
    )
  })

  return (
    <section>
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '2rem'}}>
          <h1 style={{textAlign: "center"}}>Lista de viajes registrados</h1>
          <Link to="/"><Button>Volver al inicio</Button></Link>
          <Link to="/registro-de-viajes"><Button className="btn btn-success">Registrar un nuevo viaje</Button></Link>
        </div>
        <Table style={{ width: "80%", margin: "0 auto", minWidth: "100vh" }} striped bordered hover>
        <thead>
          <tr>
            <th>Desde</th>
            <th>Hacia</th>
            <th>Transporte</th>
            <th>Kms</th>
            <th>Trabajadores</th>
            <th>Autor del registro</th>
            <th>¿Ida y vuelta?</th>
            <th>Kg CO2 por persona</th>
            <th>Kg CO2 total del viaje</th>
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