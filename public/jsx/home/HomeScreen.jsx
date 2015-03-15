'use strict';

var React = require('react');
var NavMenu = require('../nav/NavMenu.jsx');

var HomeScreen = React.createClass({

  render: function () {
    return (
      <div>
        <NavMenu />
        <h1>Home Screen</h1>
      </div>
    );
  }

});

module.exports = HomeScreen;