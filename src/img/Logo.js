// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');

var Logo = React.createClass({

  render: function() {
    var classes = [];
    if (this.props.inverse) {
      classes.push('logo--inverse');
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return (
      <svg className={classes.join(' ')} version="1.1"
        height="27" width="30" viewBox="0 0 30 27">
        <g strokeWidth="4" fill="none" fillRule="evenodd">
          <rect stroke="#777777" x="9" y="10" width="19" height="15"></rect>
          <g className="doc-brand">
            <rect x="2" y="2" width="19" height="15"></rect>
          </g>
        </g>
      </svg>
    );
  }

});

module.exports = Logo;
