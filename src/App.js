import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import YourSelectedTask from './components/YourSelectedTask/YourSelectedTask';
import Header from './components/Header/Header';
import SearchEvents from './components/SearchEvents/SearchEvents';
import RegisterList from './components/RegisterList/RegisterList';
import AddEvent from './components/AddEvent/AddEvent';
import NotFound from './components/NotFound/NotFound';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [data, setData] = useState([]);
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    fetch('https://secure-journey-18425.herokuapp.com/events')
      .then(res => res.json())
      .then(result => setData(result))
  }, [])

  return (
    <userContext.Provider value={{ data: [data, setData], loggedInUser: [loggedInUser, setLoggedInUser], allTask: [allTask, setAllTask] }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <SearchEvents />
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/register/:taskName">
            <Register />
          </PrivateRoute>
          <PrivateRoute path="/yourSelectedTask">
            <Header />
            <YourSelectedTask />
          </PrivateRoute>
          <Route path="/registerList">
            <RegisterList />
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>

  );
}

export default App;
