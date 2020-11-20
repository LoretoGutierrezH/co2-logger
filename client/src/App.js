import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import TripsLogged from './containers/TripsLogged/TripsLogged.jsx';
import TripLogger from './containers/TripLogger/TripLogger.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/lista-de-viajes" component={TripsLogged} />
          <Route path="/registro-de-viajes" component={TripLogger} />
        </Switch>
      </main>
    </Router>
    
  );
}

export default App;
