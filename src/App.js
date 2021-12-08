
import './App.css';
import ClockAccess from './ClockAccess';
import ClockAddAlarm from './ClockAddAlarm';
import ClockTimer from './ClockTimer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
   <Router>
      <div className="App">
        <Routes>
          <Route path = '/' element = {<ClockAccess />} />
          <Route path = '/addAlarm' element = {<ClockAddAlarm />} />
          <Route path = '/clockTimer' element = {<ClockTimer />} />
        </Routes>
      </div>
   </Router>
  );
}

export default App;
