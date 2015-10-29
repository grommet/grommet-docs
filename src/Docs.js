// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var App = require('grommet/components/App');

var Docs = React.createClass({

  render: function() {
    return (
      <App className="docs" centered={false}>
        {this.props.children}
      </App>
    );
  }

});

module.exports = Docs;
