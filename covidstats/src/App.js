import './App.css';
import "tabler-react/dist/Tabler.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import PageRouter from './dashboard/PageRouter';


function App() {
  return (
    <div className="App">
      <PageRouter />
    </div>
  );
}

export default App;
