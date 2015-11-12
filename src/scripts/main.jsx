var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');

Parse.initialize(
  "cNEhvCr0kWjGuCU3Hzq3VSvEKa4ef47lBRJCNqI7",
  "iYRJaatOct50RV63jhQQH6AmMh8fKUodLY96yf1I"
);

var App = require('./app');

ReactDOM.render(<App />, document.getElementById('root'));
