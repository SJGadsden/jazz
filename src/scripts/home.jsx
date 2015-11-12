var React = require('react');
var PropTypes = React.PropTypes;

var Home = React.createClass({

  render: function() {
    return (
      <div className="home">

        <p>The Tampa Bay area is home to a host of jazz icons who are living out their golden years playing small venues.
          During their prime, these icons traveled the globe with some of the greatest bandleaders in the world.</p>
        <p>Ernie Calhoun, a self taught tenor saxophone player, has a music career that spans more than 65 years, playing with the Manzy Harris Orchestra and later with Charlie Brantley and the Honeymooners.
        Calhoun later toured with the Lloyd Price Big Band, and with drummer-organist Chris Columbo.
        By 1964, Calhoun had joined forces with Al Downing forming a band that was considered the leading jazz band in the Tampa Bay area.
        Downing was the group's leader, but it was Calhoun's golden tenor that created the group's unmistakable sound.</p>
        <p>Jazz trombonist George "Buster Cooper" was born in St. Petersburg, Fla. on April 4, 1929. He toured with Lionel Hampton in 1953 and later played in the house band at the Apollo Theater in New York City.
        From 1962 to 1969 he was trombonist in Duke Ellington's Orchestra - traveling the world as a Jazz Ambassadors for the U.S. State Department.
        Cooper currently is a bandleader of the Buster Cooper Trio, and performs at several venues in region.</p>
        <p>John Lamb, born Nov. 29, 1933, is an American Jazz double bassist, who was a member of the Duke Ellington Orchestra where his work was included on three Grammy-winning recordings.
        Lamb later moved to St. Petersburg, Fla. and taught music in public schools as well as St. Petersburg College. For his service to jazz, he was the recipient of the "Satchmo Award."</p>

        </div>
    );
  }

});

module.exports = Home;
