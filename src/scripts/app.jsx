var React = require('react');
var PropTypes = React.PropTypes;

var NavigationItem = require('./navigationItem');
var Home = require('./home');
var History = require('./history');
var Live = require('./live');
var Listen = require('./listen');

var App = React.createClass({

  getInitialState: function() {
    return {
      hash: window.location.hash
    };
  },

  componentWillMount: function() {
    window.addEventListener('hashchange', function () {
      this.navigate(window.location.hash);
    }.bind(this));
  },

  navigate: function (to) {
    this.setState({
      hash: to
    })
  },

  render: function() {
    var currentPage;

    switch (this.state.hash) {
      case '#history':
        currentPage = <History />;
        break;
      case '#live':
        currentPage = <Live />;
        break;
      case '#listen':
        currentPage = <Listen />;
        break;
      default:
        currentPage = <Home />;
    }

    return (
      <div className="app">
        <header>
          <h1>Jazz: The Deuces and Beyond</h1>
        </header>
        <section>
          <aside>
            <div className="logo">
              <a href="http://www.live365.com/stations/member_12525528306">
                <img border="0" src="https://s3.amazonaws.com/ugc_production.parse.com/parse_app_metadata/372327/jazz-logo.png?1447070559" />
              </a>              
            </div>
            <ul>
              <NavigationItem to="" label="Home" />
              <NavigationItem to="#history" label="History" />
              <NavigationItem to="#live" label="Live" />
              <NavigationItem to="#listen" label="Listen" />
            </ul>
          </aside>
          <main>{currentPage}</main>
        </section>
        <footer>
          Made with &hearts; by Sandra J. Gadsden @ The Iron Yard in St. Petersburg, Fla.
        </footer>
      </div>
    );
  }

});

module.exports = App;
