var React = require('react');
var PropTypes = React.PropTypes;

var NavigationItem = React.createClass({

  handleClick: function () {
    this.props.handler(this.props.to)
  },

  render: function() {
    var current = window.location.hash === this.props.to ? 'current' : '';
    return (
      <li className={current}>
        <a href={this.props.to} >{this.props.label}</a>
      </li>
    );
  }
});

module.exports = NavigationItem;
