import './App.css';
import "tabler-react/dist/Tabler.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Error400 from "./error_pages/Error400";
import Error401 from "./error_pages/Error401";
import Error403 from "./error_pages/Error403";
import Error404 from "./error_pages/Error404";
import Error500 from "./error_pages/Error500";
import NavHeader from './dashboard/NavHeader';
import StatePage from './dashboard/StatePage';
import FeedPage from './dashboard/FeedPage';
import AboutPage from './dashboard/AboutPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={NavHeader} />
          <Route exact path="/state" component={StatePage} />
          <Route exact path="/feed" component={FeedPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/400" component={Error400} />
          <Route exact path="/401" component={Error401} />
          <Route exact path="/403" component={Error403} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
