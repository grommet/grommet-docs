// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Box = require('grommet/components/Box');
var DocsSplit = require('../DocsSplit');
var DocsArticle = require('../DocsArticle');
var NavAnchor = require('../NavAnchor');
var Menu = require('grommet/components/Menu');

// var Philosophy = require('./Philosophy');
var BestPractices = require('./BestPractices');
var Usability = require('./Usability');
var Interactions = require('./Interactions');
var Mobile = require('./Mobile');
var Accessibility = require('./Accessibility');
var Color = require('./Color');
var Padding = require('./Padding');
var Text = require('./Text');
var Typography = require('./Typography');
var WritingStyle = require('./WritingStyle');
var DateTime = require('./DateTime');
var Capitalization = require('./Capitalization');
var Icons = require('./Icons');
var Resources = require('./Resources');
var A11y = require('../utils/a11y');

var CONTENTS = [
  {label: 'Philosophy',
    contents: [
      {route: "design_best_practices", label: 'Best Practices', component: BestPractices},
      {route: "design_usability", label: 'Usability', component: Usability},
      {route: "design_interactions", label: 'Interactions', component: Interactions},
      {route: "design_mobile", label: 'Mobile', component: Mobile},
      {route: "design_accessibility", label: 'Accessibility', component: Accessibility}
    ]},
  {label: 'Basics',
    contents: [
      {route: "design_color", label: 'Color', component: Color},
      {route: "design_padding", label: 'Padding', component: Padding},
      {route: "design_text", label: 'Text', component: Text},
      {route: "design_typography", label: 'Typography', component: Typography},
      {route: "design_writing_style", label: 'Writing Style', component: WritingStyle},
      {route: "design_date_time", label: 'Date and Time', component: DateTime},
      {route: "design_capitalization", label: 'Capitalization', component: Capitalization},
      {route: "design_icons", label: 'Icons', component: Icons}
    ]},
  {route: "design_resources", label: 'Resources', component: Resources}
];

var Design = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'design/'
    };
  },

  componentDidMount: function () {
    A11y.updatePageTitle('Design');
  },

  render: function () {
    var title = <NavAnchor href={this.context.routePrefix + "design"}>Design</NavAnchor>;
    return (
      <DocsSplit title={title} contents={CONTENTS} onChange={this._highlightCode}>
        <DocsArticle title="Design" colorIndex="neutral-2">
          <Box>
            <p>This application style guide was created by the designers at Hewlett
            Packard Enterprise. The guide covers the general design principles as well
            as specific design guidelines. You'll also find downloadable assets for the
            basic elements of the application style. These are meant to help designers
            quickly begin designing applications based on these styles and patterns.
            Finally, we've also created a web-based development platform that enables
            developers to quickly begin implementing enterprise applications.</p>
            <Menu direction="column">
              <NavAnchor id="resources-button" primary={true}
                href={this.context.routePrefix + "design/resources"}>
                Resources
              </NavAnchor>
            </Menu>
          </Box>
        </DocsArticle>
      </DocsSplit>
    );
  }
});

var DesignDocument = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'design/'
    };
  },

  render: function () {
    var title = <NavAnchor href={this.context.routePrefix + "design"}>Design</NavAnchor>;
    return (
      <DocsSplit title={title} contents={CONTENTS}>
        {this.props.children}
      </DocsSplit>
    );
  }
});

var Empty = React.createClass({
  render: function () {
    return (<div></div>);
  }
});

function createContentRoutes(contents) {
  var result = [];
  contents.forEach(function (content) {

    var component = content.component || Empty;
    result.push(
      <Route key={content.label}
        path={content.label.toLowerCase().replace(/ /g, "-")}
        component={component} />
    );

    if (content.hasOwnProperty('contents')) {
      result = result.concat(createContentRoutes(content.contents));
    }
  });
  return result;
}

Design.routes = function () {
  var routes = createContentRoutes(CONTENTS);
  return [
    <Route key="top" path="design" component={Design} />,
    <Route key="docs" path="design" component={DesignDocument}>{routes}</Route>
  ];
};

module.exports = Design;
