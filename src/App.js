import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Users } from './components/Users/Users';
import { Playlist } from './components/Playlist/Playlist';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/playlists">Playlists</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="row mt-3">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/playlists">
              <Playlist />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
