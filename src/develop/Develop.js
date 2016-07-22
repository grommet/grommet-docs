// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var DocsSplit = require('../DocsSplit');
var DocsArticle = require('../DocsArticle');
var NavAnchor = require('../NavAnchor');
var Box = require('grommet/components/Box');
var Menu = require('grommet/components/Menu');

var HelloWorld = require('./HelloWorld');
var GetStarted = require('./GetStarted');
var Architecture = require('./Architecture');
var Integration = require('./Integration');
var Accessibility = require('./Accessibility');
var BrowserSupport = require('./BrowserSupport');

var AccordionDoc = require('./components/AccordionDoc');
var ActionsDoc = require('./patterns/ActionsDoc');
var AnchorDoc = require('./components/AnchorDoc');
var AppDoc = require('./components/AppDoc');
var ArticleDoc = require('./components/ArticleDoc');
var BoxDoc = require('./components/BoxDoc');
var BrickDoc = require('./components/BrickDoc');
var ButtonDoc = require('./components/ButtonDoc');
var CalendarDoc = require('./components/CalendarDoc');
var CarouselDoc = require('./components/CarouselDoc');
var ChartDoc = require('./components/ChartDoc');
var CheckBoxDoc = require('./components/CheckBoxDoc');
var ColumnsDoc = require('./components/ColumnsDoc');
var DashboardDoc = require('./patterns/DashboardDoc');
var DateTimeDoc = require('./components/DateTimeDoc');
var DistributionDoc = require('./components/DistributionDoc');
var FooterDoc = require('./components/FooterDoc');
var FormDoc = require('./components/FormDoc');
var FormFieldDoc = require('./components/FormFieldDoc');
var HeaderDoc = require('./components/HeaderDoc');
var HeadingDoc = require('./components/HeadingDoc');
var HeadlineDoc = require('./components/HeadlineDoc');
var IconDoc = require('./components/IconDoc');
var ImageDoc = require('./components/ImageDoc');
var LabelDoc = require('./components/LabelDoc');
var LayerDoc = require('./components/LayerDoc');
var LegendDoc = require('./components/LegendDoc');
var ListDoc = require('./components/ListDoc');
var LoginFormDoc = require('./components/LoginFormDoc');
var MapDoc = require('./components/MapDoc');
var MarkdownDoc = require('./utils/MarkdownDoc');
var MenuDoc = require('./components/MenuDoc');
var MeterDoc = require('./components/MeterDoc');
var NavigationDoc = require('./patterns/NavigationDoc');
var NotificationDoc = require('./components/NotificationDoc');
var NumberInputDoc = require('./components/NumberInputDoc');
var ParagraphDoc = require('./components/ParagraphDoc');
var QuoteDoc = require('./components/QuoteDoc');
var RadioButtonDoc = require('./components/RadioButtonDoc');
var RestDoc = require('./utils/RestDoc');
var RestWatchDoc = require('./utils/RestWatchDoc');
var SearchDoc = require('./components/SearchDoc');
var SearchInputDoc = require('./components/SearchInputDoc');
var SectionDoc = require('./components/SectionDoc');
var SidebarDoc = require('./components/SidebarDoc');
var SocialShareDoc = require('./components/SocialShareDoc');
var SpinningDoc = require('./components/SpinningDoc');
var SplitDoc = require('./components/SplitDoc');
var StatusDoc = require('./components/StatusDoc');
var TabsDoc = require('./components/TabsDoc');
var TableDoc = require('./components/TableDoc');
var TagsDoc = require('./components/TagsDoc');
var TilesDoc = require('./components/TilesDoc');
var TitleDoc = require('./components/TitleDoc');
var TopologyDoc = require('./components/TopologyDoc');
var ValueDoc = require('./components/ValueDoc');
var VideoDoc = require('./components/VideoDoc');
var WorldMapDoc = require('./components/WorldMapDoc');

var A11y = require('../utils/a11y');

//hjjs configuration
var hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

var CONTENTS = [
  {label: 'Guides',
    contents: [
      {route: 'develop_helloworld', label: 'Hello World',
        component: HelloWorld},
      {route: 'develop_getstarted', label: 'Get Started',
        component: GetStarted}
    ]
  },
  {label: 'Patterns',
    contents: [
      {route: 'develop_dashboard', label: 'Dashboard', component: DashboardDoc},
      {route: 'develop_navigation', label: 'Navigation', component: NavigationDoc},
      {route: 'develop_actions', label: 'Actions', component: ActionsDoc}
    ]
  },
  {label: 'Components',
    contents: [
      {route: 'develop_accordion', label: 'Accordion', component: AccordionDoc},
      {route: 'develop_anchor', label: 'Anchor', component: AnchorDoc},
      {route: 'develop_app', label: 'App', component: AppDoc},
      {route: 'develop_article', label: 'Article', component: ArticleDoc},
      {route: 'develop_box', label: 'Box', component: BoxDoc},
      {route: 'develop_brick', label: 'Brick', component: BrickDoc},
      {route: 'develop_button', label: 'Button', component: ButtonDoc},
      {route: 'develop_calendar', label: 'Calendar', component: CalendarDoc},
      {route: 'develop_carousel', label: 'Carousel', component: CarouselDoc},
      {route: 'develop_chart', label: 'Chart', component: ChartDoc},
      {route: 'develop_check-box', label: 'CheckBox', component: CheckBoxDoc},
      {route: 'develop_columns', label: 'Columns', component: ColumnsDoc},
      {route: 'develop_date-time', label: 'DateTime', component: DateTimeDoc},
      {route: 'develop_distribution', label: 'Distribution', component: DistributionDoc},
      {route: 'develop_footer', label: 'Footer', component: FooterDoc},
      {route: 'develop_form', label: 'Form', component: FormDoc},
      {route: 'develop_form-field', label: 'FormField', component: FormFieldDoc},
      {route: 'develop_header', label: 'Header', component: HeaderDoc},
      {route: 'develop_heading', label: 'Heading', component: HeadingDoc},
      {route: 'develop_headline', label: 'Headline', component: HeadlineDoc},
      {route: 'develop_icon', label: 'Icon', component: IconDoc},
      {route: 'develop_image', label: 'Image', component: ImageDoc},
      {route: 'develop_label', label: 'Label', component: LabelDoc},
      {route: 'develop_layer', label: 'Layer', component: LayerDoc},
      {route: 'develop_legend', label: 'Legend', component: LegendDoc},
      {route: 'develop_list', label: 'List', component: ListDoc},
      {route: 'develop_login-form', label: 'LoginForm', component: LoginFormDoc},
      {route: 'develop_map', label: 'Map', component: MapDoc},
      {route: 'develop_menu', label: 'Menu', component: MenuDoc},
      {route: 'develop_meter', label: 'Meter', component: MeterDoc},
      {route: 'develop_notification', label: 'Notification', component: NotificationDoc},
      {route: 'develop_number-input', label: 'NumberInput', component: NumberInputDoc},
      {route: 'develop_paragraph', label: 'Paragraph', component: ParagraphDoc},
      {route: 'develop_quote', label: 'Quote', component: QuoteDoc},
      {route: 'develop_radio-button', label: 'RadioButton', component: RadioButtonDoc},
      {route: 'develop_search', label: 'Search', component: SearchDoc},
      {route: 'develop_search-input', label: 'SearchInput', component: SearchInputDoc},
      {route: 'develop_section', label: 'Section', component: SectionDoc},
      {route: 'develop_sidebar', label: 'Sidebar', component: SidebarDoc},
      {route: 'develop_social-share', label: 'SocialShare', component: SocialShareDoc},
      {route: 'develop_spinning', label: 'Spinning', component: SpinningDoc},
      {route: 'develop_split', label: 'Split', component: SplitDoc},
      {route: 'develop_status', label: 'Status', component: StatusDoc},
      {route: 'develop_tabs', label: 'Tabs', component: TabsDoc},
      {route: 'develop_table', label: 'Table', component: TableDoc},
      {route: 'develop_tags', label: 'Tags', component: TagsDoc},
      {route: 'develop_tiles', label: 'Tiles', component: TilesDoc},
      {route: 'develop_title', label: 'Title', component: TitleDoc},
      {route: 'develop_topology', label: 'Topology', component: TopologyDoc},
      {route: 'develop_value', label: 'Value', component: ValueDoc},
      {route: 'develop_video', label: 'Video', component: VideoDoc},
      {route: 'develop_world-map', label: 'WorldMap', component: WorldMapDoc}
    ]
  },
  {label: 'Utils',
    contents: [
      {route: 'develop_markdown', label: 'Markdown', component: MarkdownDoc},
      {route: 'develop_rest', label: 'Rest', component: RestDoc},
      {route: 'develop_rest-watch', label: 'RestWatch', component: RestWatchDoc}
    ]
  },
  {label: 'Reference',
    contents: [
      {route: 'develop_architecture', label: 'Architecture',
        component: Architecture},
      {route: 'develop_integration', label: 'Integration',
        component: Integration},
      {route: 'develop_accessibility', label: 'Accessibility',
        component: Accessibility},
      {route: 'develop_browser_support', label: 'Browser Support',
        component: BrowserSupport}
    ]
  }
];

var Develop = React.createClass({
  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'develop/'
    };
  },

  componentDidMount: function () {
    A11y.updatePageTitle('Develop');
  },

  render: function () {
    var title = <NavAnchor href={this.context.routePrefix + "develop"}>Develop</NavAnchor>;
    return (
      <DocsSplit title={title} contents={CONTENTS} onChange={this._highlightCode}>
        <DocsArticle title="Develop" colorIndex="neutral-1">
          <Box>
            <p>Grommet was created to give developers and designers alike access to tools
            that otherwise are out of reach of most product teams. Grommet’s goal is to
            assist in creating experiences that work accross the many different interaction
            methods and screen sizes.</p>
            <Menu direction="column">
              <NavAnchor id='hello-world' primary={true}
                href={this.context.routePrefix + "develop/hello-world"}>
                Hello Grommet!
              </NavAnchor>
              <NavAnchor id='get-started' primary={true}
                href={this.context.routePrefix + "develop/get-started"}>
                Get Started
              </NavAnchor>
            </Menu>
          </Box>
        </DocsArticle>
      </DocsSplit>
    );
  }
});

var DevelopDocument = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  childContextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  getChildContext: function() {
    return {
      routePrefix: this.context.routePrefix + 'develop/'
    };
  },

  componentDidMount: function () {
    this._highlightCode();
  },

  componentDidUpdate: function () {
    this._highlightCode();
  },

  _highlightCode: function () {
    var nodes = document.querySelectorAll('pre code');
    for (var i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  },

  render: function () {
    var title = <NavAnchor to={this.context.routePrefix + "develop"}>Develop</NavAnchor>;
    return (
      <DocsSplit title={title} contents={CONTENTS} onChange={this._highlightCode}>
        {this.props.children}
      </DocsSplit>
    );
  }
});

function createContentRoutes(contents) {
  var result = [];
  contents.forEach(function (content) {
    result.push(
      <Route key={content.label}
        path={content.label.toLowerCase().replace(/ /g, "-")}
        component={content.component} />
    );
    if (content.hasOwnProperty('contents')) {
      result = result.concat(createContentRoutes(content.contents));
    }
  });
  return result;
}

Develop.routes = function () {
  var routes = createContentRoutes(CONTENTS);
  return [
    <Route key="top" path="develop" component={Develop} />,
    <Route key="docs" path="develop" component={DevelopDocument}>{routes}</Route>
  ];
};

module.exports = Develop;
