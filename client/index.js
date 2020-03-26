import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react';
import { Button } from 'react-bootstrap';
const axios = require("axios");
const BASE_URL = "https://api.daily.co/v1";
const AUTH_TOKEN = process.env.DAILY_API_KEY;
const kebabCase = require("lodash.kebabcase");


function LiveStream() {

  // const createRoomEndpoint = "http://localhost:3001/livestream";
  const startCall = async () => {
    let room = Room("test", null)
    console.log({ room })
  }

  return (
    <div>
      <h1>Livestream</h1>
      <Button onclick={startCall}>
        Start Call
    </Button>
    </div>
  );

};

export default LiveStream;

