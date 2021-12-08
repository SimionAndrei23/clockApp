
import './App.css';
import ClockAccess from './pages/ClockAccess';
import ClockAddAlarm from './pages/ClockAddAlarm';
import ClockTimer from './pages/ClockTimer';
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
