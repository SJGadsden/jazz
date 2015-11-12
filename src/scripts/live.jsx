var React = require('react');
var Parse = require('parse');

var Event = Parse.Object.extend({
  className: "Jazzon22"
});

var EventView = React.createClass({

  render: function() {
    return (
      <div>
        <h3>
          <a href={this.props.event.Concert[0]}>
            {this.props.event.Description}
          </a>
        </h3>
        <div>
          <span>{this.props.event.Date.toDateString()}</span>
          <span> @ </span>
          <span>{this.props.event.Venue}</span>
        </div>
        <div>${this.props.event.Cost}</div>
        <p>{this.props.event.Summary}</p>
        <hr/>
      </div>
    );
  }

});

var Live = React.createClass({

  getInitialState: function() {
    return {
      events: []
    };
  },

  componentWillMount: function() {
    var query = new Parse.Query(Event);
    query.find({
      success: function(results) {
        this.setState({
          events: results
        })
      }.bind(this)
    });
  },

  render: function() {
    var events = this.state.events.map(function (event, i) {
      return <EventView key={i} event={event.attributes} />;
    });
    return (
      <div className="live">
        <h2>Live</h2>
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/yXuZG5U3TvM" frameborder="0" allowfullscreen></iframe>
          <div className="events">
            {events}
          </div>
      </div>
    );
  }

});

module.exports = Live;
