import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TripsLogged from './containers/TripsLogged/TripsLogged.jsx';
import TripLogger from './containers/TripLogger/TripLogger.jsx';


const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" component={TripsLogged} exact />
          <Route path="/registro-de-viajes" component={TripLogger} />
        </Switch>
      </main>
    </Router>
    
  );
}

export default App;
