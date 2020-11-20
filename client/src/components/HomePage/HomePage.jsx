import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import style from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <section className={style.homePageContainer}>
      <h1>Haz clic en el botón de la acción que quieras realizar</h1>
      <section>
        <Link to="/lista-de-viajes"><Button className="btn btn-warning" style={{margin: '2rem'}}>Ver lista de viajes</Button></Link>
        <Link to="/registro-de-viajes"><Button className="btn btn-success" style={{margin: '2rem'}}>Registrar un viaje</Button></Link>
      </section>
    </section>
  );
}

export default HomePage;