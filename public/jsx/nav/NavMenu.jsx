'use strict';

var React = require('react');

var NavMenu = React.createClass({

  render: function () {
    return (
      <ul className="main-nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#print">Print</a></li>
      </ul>
    );
  }

});


module.exports = NavMenu;