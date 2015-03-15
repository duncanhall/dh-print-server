'use strict';

require('bootstrap');
require('bootstrap.css');

var React = require('react');

// We create a function that will lazy load modules based on the current hash
var resolveRoute = function () {

  // If no hash or hash is '#' we lazy load the Home component
  if (!location.hash || location.hash.length === 1) {
    require.ensure([], function () {
      var Home = require('./home/HomeScreen.jsx');
      React.render(<Home />, document.getElementById('content'));
    });

    // Or if route is #admin we lazy load that
  } else if (location.hash === '#print') {
    require.ensure([], function () {
      var Print = require('./print/PrintRequestScreen.jsx');
      React.render(<Print />, document.getElementById('content'));
    });
  }

};

// Resolve route on hash change
window.onhashchange = resolveRoute;

// Resolve current route
resolveRoute();


if (module.hot) {
  module.hot.accept(resolveRoute);
}