var React = require('react');
var PropTypes = React.PropTypes;

var History = React.createClass({

  render: function() {
    return (
      <div className="history">
        <h2>History of Jazz on the Deuces</h2>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/qET6QGwn_p4" frameborder="0" allowfullscreen></iframe>
        <p>Built in 1925, the Manhattan Casino is significant for its contribution to entertainment and the culture in the African American community in the Midtown region of St. Petersburg for more than 40 years.</p>
        <p>Located along 22nd Street South on what was once a thriving "main street", the Manhattan Casino was a showcase for local artists as well as a haven for world-renowned traveling African American entertainers who would stop in St. Petersburg during their tours.</p>
        <p>Some of American music's most legendary performers played at the popular venue, including Louis Armstrong, Fats Waller, Duke Ellington, Count Basie, Lionel Hampton, Cab Calloway, Ray Charles, Nat King Cole, Sarah Vaughn, Fats Domino and the Ink Spots.</p>
        <p>Years later, the Manhattan Casino hosted dances featuring local artists; rock and roll and blues singers popular in the 1960's also performed at the Casino. The venue closed its doors in 1968, but its impact to the music scene was already set.</p>
        <p>The doors reopened in August 2013 and is now a multi-purpose event facility used for banquets, parties, family functions, meetings, wedding receptions, musical events and much more.
        </p>
      </div>
    );
  }

});

module.exports = History;
