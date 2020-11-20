//Lista de todos los viajes realizados y su información de huella de CO2
import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
    return <li>Desde {trip.travelFrom} hasta {trip.travelTo}</li>
  })

  return (
    <section>
      <h1>Lista de viajes registrados</h1>
      <ul>
        {rederedTrips}
      </ul>
    </section>
  );
}

export default TripsLogged;