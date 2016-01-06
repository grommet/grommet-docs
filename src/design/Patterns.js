// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var LoginForm = require('grommet/components/LoginForm');
var Header = require('grommet/components/Header');
var Title = require('grommet/components/Title');
var Menu = require('grommet/components/Menu');
var Meter = require('grommet/components/Meter');
var Search = require('grommet/components/Search');
var Logo = require('../img/Logo');
var Gravatar = require('react-gravatar');
var Link = require('react-router').Link;
var DocsArticle = require('../DocsArticle');


var Patterns = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  render: function () {

    var genericSeries = [
      {label: 'Used', value: 10, units: 'TB'},
      {label: 'Available', value: 20, units: 'TB'}
    ];

    var statusSeries = [
      {label: 'Error', value: 10, colorIndex: 'error'},
      {label: 'Warning', value: 20, colorIndex: 'warning'},
      {label: 'OK', value: 70, colorIndex: 'ok'}
    ];

    return (
      <DocsArticle title="Patterns" colorIndex="neutral-3">
        <p>
          Interaction design patterns are task driven workflows commonly
          used throughout a user interface.  Designers and developers should
          follow the design pattern guidance in order to create consistent user
          experiences across the product suite. Once a user is familiar with
          the design patterns of your application they will come to expect the
          same experience for the same tasks in other applications.
        </p>

        <section>
          <h2>Login</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam risus, fermentum at nisl pellentesque, iaculis mattis nisl. Duis dapibus.
            <Link to={this.context.routePrefix + "login"}>Read more</Link>
          </p>
          <div className="example">
            <LoginForm rememberMe={true} forgotPassword={<a>Forgot password?</a>} />
          </div>

        </section>

        <section>
          <h2>Header</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam risus,
          fermentum at nisl pellentesque, iaculis mattis nisl. Duis dapibus.
           <Link to={this.context.routePrefix + "header"}>Read more</Link>
          </p>
          <div className="example">
            <Header>
              <span>
                <Title><Logo /> Title</Title>
                <Search inline={true} />
              </span>
              <Menu>
                <Gravatar email={'eric.soderberg@hp.com'} size={48} />
              </Menu>
            </Header>
          </div>

        </section>

        <section>
          <h2>Dashboard</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam risus,
          fermentum at nisl pellentesque, iaculis mattis nisl. Duis dapibus.
           <Link to={this.context.routePrefix + "dashboard"}>Read more</Link>
          </p>
          <div className="example">
            <Meter type="circle" series={genericSeries} />
            <Meter type="circle" series={statusSeries} />
          </div>

        </section>

        <section>
          <h2>Search</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam risus,
          fermentum at nisl pellentesque, iaculis mattis nisl. Duis dapibus.
          <Link to={this.context.routePrefix + "search"}>Read more</Link></p>

          <div className="example">
            <Header>
              <Search inline={true} />
            </Header>
          </div>

        </section>
      </DocsArticle>
    );
  }
});

module.exports = Patterns;
