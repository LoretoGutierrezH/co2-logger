import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

const TripLogger = (props) => {
  const [formState, setFormState] = useState(null);
  const [transportState, setTransportState] = useState(null);
	const [CO2State, setCO2State] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);

	const fetchFormInformation = (event) => {
		//obtiene la información ingresada en el formulario
		event.preventDefault();
    const form = event.currentTarget;
    const logAuthor = form["formLogAuthor"].value;
		const fromAddress = form["formFromAddress"].value;
		const toAddress = form["formToAddress"].value;
		const transport = transportState ? transportState : ['Metro', 0.033]; //si no se detecta cambio este será el valor predeterminado
		const kms = form["formKms"].value * 1;
		const workers = form["formWorkers"].value * 1;
		const roundTrip = form["formRoundtrip"].checked;

		//guardando información en el estado
		setFormState({
      logAuthor,
      fromAddress,
      toAddress, 
      transport, 
      kms, 
      workers, 
      roundTrip
    });

  };
	
	//para detectar la opción seleccionada *posiblemente se pueda unir con fetchFormInformation
  const detectTransport = (event) => {
    const selectedOption = event.target.options.selectedIndex;
    const transportName = event.target.options[selectedOption].innerText
    const transportValue = event.target.value * 1;
    setTransportState([transportName, transportValue]);
  }

	//calcula CO2 con la formula entregada en las instrucciones y guarda la info en su estado
  const calculateCO2 = (event) => {
		event.preventDefault();
    let trips;
    formState.roundTrip ? trips = 1 : trips = 2;
    const totalCO2 = formState.transport[1] * formState.kms * trips;
    const CO2byWorker = (formState.transport[1] * formState.kms * trips) / formState.workers;
    setCO2State({
      totalCO2,
      CO2byWorker
    })
  }

	//se realiza una solicitud post solo si ya se realizó el cálculo y esta información se guardó en el estado correspondiente
  useEffect(() => {
    const submitLog = () => {
      const tripLog = {
        travelFrom: formState.fromAddress,
        travelTo: formState.toAddress,
        transport: formState.transport[0],
        kmTraveled: formState.kms,
        workers: formState.workers,
        logAuthor: formState.logAuthor,
        roundTrip: formState.roundTrip,
        totalCO2: CO2State.totalCO2,
        CO2byWorker: CO2State.CO2byWorker
      }

      //sending trip log to db
      axios.post(`http://localhost:8000/travel-log/v1/travels/`, tripLog) 
      .then(res => {
				console.log(res);
				setSuccessMessage("Viaje registrado correctamente.");
			})
			.catch(error => {
				setSuccessMessage(`Se produjo un error durante el registro del viaje: ${error.message}`);
			})
    }

    if (CO2State !== null) {
			submitLog();
    }
  }, [CO2State])

	//para limpiar el mensaje que avisa que se registró el viaje
	if (successMessage) {
		setTimeout(() => {
			setSuccessMessage(null);
		}, 2000)
	}

	return (
		<section>
			<div style={{display: 'flex', justifyContent: 'space-around', marginTop: '2rem'}}>
				<h1 style={{textAlign: 'center'}}>Formulario de registro de viajes</h1>
				<Link to="/"><Button>Volver al inicio</Button></Link>
				<Link to="/lista-de-viajes"><Button className="btn btn-warning">Ver lista de viajes</Button></Link>
			</div>
			<Form
        onChange={fetchFormInformation}
        onSubmit={calculateCO2}
				style={{ width: "80%", margin: "0 auto", minHeight: "120vh" }}
			>
        <Form.Group controlId="formLogAuthor">
					<Form.Label>Autor</Form.Label>
					<Form.Control type="text" placeholder="Escribe tu nombre completo" required />
				</Form.Group>

				<Form.Group controlId="formFromAddress">
					<Form.Label>Desde</Form.Label>
					<Form.Control type="address" placeholder="Dirección" required />
				</Form.Group>

				<Form.Group controlId="formToAddress">
					<Form.Label>Hacia</Form.Label>
					<Form.Control type="address" placeholder="Dirección" required />
				</Form.Group>

				<Form.Group controlId="formTransport">
					<Form.Label>Medio de transporte</Form.Label>
					<Form.Control onChange={detectTransport} as="select" required >
						<option value="0.033">Metro</option>
						<option value="0.21">Auto</option>
						<option value="0.249">Camioneta</option>
						<option value="0.092">Motocicleta</option>
						<option value="0.039">Bus Transantiago</option>
						<option value="0.012">Bus privado</option>
						<option value="0.279">Avión (nacional)</option>
						<option value="0.179">Avión (internacional)</option>
						<option value="0">Caminando</option>
					</Form.Control>
				</Form.Group>

				<Form.Group controlId="formKms">
					<Form.Label>Kms recorridos</Form.Label>
					<Form.Control type="number" placeholder="Kilómetros" required />
				</Form.Group>

				<Form.Group controlId="formWorkers">
					<Form.Label>Pasajeros</Form.Label>
					<Form.Control
						type="number"
						placeholder="Cantidad de personas en el viaje"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formRoundtrip">
					<Form.Check
						type="checkbox"
						label="¿Solo ida? (desmarcar si fue ida y vuelta)"
					/>
				</Form.Group>
				<Button className="btn btn-success" variant="primary" type="submit">
					Enviar
				</Button>
				<h4 style={{marginTop: '1rem', color: 'green', fontWeight: 'bold'}}>{successMessage}</h4>
			</Form>
		</section>
	);
};

export default TripLogger;
