import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from "react-test-renderer";
import Loader from "../components/Loader";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('matches snapshot', () => {
  renderer.create(<App />).toJSON();
});