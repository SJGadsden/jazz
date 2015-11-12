var React = require('react');
var PropTypes = React.PropTypes;

var Listen = React.createClass({

  render: function() {
    return (
      <div className="listen">
        <h2>Listen</h2>
        <div className="player">
          <script type="text/javascript" src="http://widget.live365.com/widget/js/widget.js" charset="utf-8"></script>
          <object id="live365Player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,124,0" width="240" height="440" align="middle">
            <param name="allowScriptAccess" value="always" />
            <param name="bgcolor" value="#888888" />
            <param name="wmode" value="transparent" />
            <param name="movie" value="http://widget.live365.com/widget/widget.swf" />
            <param name="FlashVars" value="Widget_Server=widget.live365.com/widget/&p=member_12525528306&site=web&stationBroadcaster=member_12525528306&wId=150F014D8D0296E3FD77F37D&mainColor=0x663300&startPage=0&autoPlay=0&style=1&hasPurchase=1&transparent=0&bgPic=https://farm6.staticflickr.com/5832/22400445107_982ac5bd77.jpg&codeType=0" />
            <param name="quality" value="high" />
            <embed name="live365Player" src="http://widget.live365.com/widget/widget.swf" wmode="transparent" FlashVars="Widget_Server=widget.live365.com/widget/&p=member_12525528306&site=web&stationBroadcaster=member_12525528306&wId=150F014D8D0296E3FD77F37D&mainColor=0x663300&startPage=0&autoPlay=0&style=1&hasPurchase=1&transparent=0&bgPic=https://farm6.staticflickr.com/5832/22400445107_982ac5bd77.jpg&codeType=0" quality="high" width="200" height="330" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" bgcolor="#888888" />
          </object>
        </div>
      </div>
    );
  }

});

module.exports = Listen;
