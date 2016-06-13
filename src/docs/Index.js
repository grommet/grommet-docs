// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { Route, Link } from 'react-router';

import DocsSplit from '../DocsSplit';
import DocsArticle from '../DocsArticle';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import HelloWorld from './guides/HelloWorld';
import GetStarted from './guides/GetStarted';

import BestPractices from './design/BestPractices';
import Usability from './design/Usability';
import Interactions from './design/Interactions';
import Mobile from './design/Mobile';
import Color from './design/Color';
import Padding from './design/Padding';
import Typography from './design/Typography';
import WritingStyle from './design/WritingStyle';
import DateTime from './design/DateTime';
import Capitalization from './design/Capitalization';
import Resources from './design/Resources';

import Architecture from './reference/Architecture';
import Integration from './reference/Integration';
import Accessibility from './reference/Accessibility';
import BrowserSupport from './reference/BrowserSupport';

import ActionsDoc from './patterns/ActionsDoc';
import AnchorDoc from './components/AnchorDoc';
import AppDoc from './components/AppDoc';
import ArticleDoc from './components/ArticleDoc';
import BoxDoc from './components/BoxDoc';
import BrickDoc from './components/BrickDoc';
import ButtonDoc from './components/ButtonDoc';
import CalendarDoc from './components/CalendarDoc';
import CarouselDoc from './components/CarouselDoc';
import ChartDoc from './components/ChartDoc';
import CheckBoxDoc from './components/CheckBoxDoc';
import ColumnsDoc from './components/ColumnsDoc';
import DashboardDoc from './patterns/DashboardDoc';
import DateTimeDoc from './components/DateTimeDoc';
import DistributionDoc from './components/DistributionDoc';
import FooterDoc from './components/FooterDoc';
import FormDoc from './components/FormDoc';
import FormFieldDoc from './components/FormFieldDoc';
import HeaderDoc from './components/HeaderDoc';
import HeadingDoc from './components/HeadingDoc';
import HeadlineDoc from './components/HeadlineDoc';
import IconDoc from './components/IconDoc';
import ImageDoc from './components/ImageDoc';
import LabelDoc from './components/LabelDoc';
import LayerDoc from './components/LayerDoc';
import LegendDoc from './components/LegendDoc';
import ListDoc from './components/ListDoc';
import LoginFormDoc from './components/LoginFormDoc';
import MapDoc from './components/MapDoc';
import MarkdownDoc from './utils/MarkdownDoc';
import MenuDoc from './components/MenuDoc';
import MeterDoc from './components/MeterDoc';
import NavigationDoc from './patterns/NavigationDoc';
import NotificationDoc from './components/NotificationDoc';
import NumberInputDoc from './components/NumberInputDoc';
import ParagraphDoc from './components/ParagraphDoc';
import QuoteDoc from './components/QuoteDoc';
import RadioButtonDoc from './components/RadioButtonDoc';
import RestDoc from './utils/RestDoc';
import RestWatchDoc from './utils/RestWatchDoc';
import SearchDoc from './components/SearchDoc';
import SearchInputDoc from './components/SearchInputDoc';
import SectionDoc from './components/SectionDoc';
import SidebarDoc from './components/SidebarDoc';
import SocialShareDoc from './components/SocialShareDoc';
import SpinningDoc from './components/SpinningDoc';
import SplitDoc from './components/SplitDoc';
import StatusDoc from './components/StatusDoc';
import TabsDoc from './components/TabsDoc';
import TableDoc from './components/TableDoc';
import TagsDoc from './components/TagsDoc';
import TilesDoc from './components/TilesDoc';
import TitleDoc from './components/TitleDoc';
import TopologyDoc from './components/TopologyDoc';
import ValueDoc from './components/ValueDoc';
import VideoDoc from './components/VideoDoc';
import WorldMapDoc from './components/WorldMapDoc';

//hjjs configuration
import hljs from 'highlight.js/lib/highlight';
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

const CONTENTS = [
  {label: 'Guides',
    contents: [
      {route: 'develop_helloworld', label: 'Hello World',
        component: HelloWorld},
      {route: 'develop_getstarted', label: 'Get Started',
        component: GetStarted}
    ]
  },
  {label: 'Design',
    contents: [
      {route: "design_resources", label: 'Resources', component: Resources},
      {route: "design_best_practices", label: 'Best Practices', component: BestPractices},
      {route: "design_usability", label: 'Usability', component: Usability},
      {route: "design_interactions", label: 'Interactions', component: Interactions},
      {route: "design_mobile", label: 'Mobile', component: Mobile},
      {route: "design_color", label: 'Color', component: Color},
      {route: "design_padding", label: 'Padding', component: Padding},
      {route: "design_typography", label: 'Typography', component: Typography},
      {route: "design_writing_style", label: 'Writing Style', component: WritingStyle},
      {route: "design_date_time", label: 'Date and Time', component: DateTime},
      {route: "design_capitalization", label: 'Capitalization', component: Capitalization}
    ]},
  {label: 'Patterns',
    contents: [
      {route: 'develop_dashboard', label: 'Dashboard', component: DashboardDoc},
      {route: 'develop_navigation', label: 'Navigation', component: NavigationDoc},
      {route: 'develop_actions', label: 'Actions', component: ActionsDoc}
    ]
  },
  {label: 'Components',
    contents: [
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

class Introduction extends Component {

  getChildContext () {
    return {
      routePrefix: this.context.routePrefix + 'develop/'
    };
  }

  render () {
    const title = <Link to={this.context.routePrefix + "develop"}>Docs</Link>;
    return (
      <DocsSplit title={title} contents={CONTENTS} onChange={this._highlightCode}>
        <DocsArticle title="Docs" colorIndex="neutral-1">
          <section>
            <p>Grommet was created to give developers and designers alike access to tools
            that otherwise are out of reach of most product teams. Grommet’s goal is to
            assist in creating experiences that work accross the many different interaction
            methods and screen sizes.</p>
            <Menu direction="column">
              <Link to={this.context.routePrefix + "develop/hello-world"}>
                <Anchor tag="span" primary={true}>Hello World</Anchor>
              </Link>
              <Link to={this.context.routePrefix + "develop/get-started"}>
                <Anchor tag="span" primary={true}>Get Started</Anchor>
              </Link>
              <Link to={this.context.routePrefix + "design/resources"}>
                <Anchor tag="span" primary={true}>Design Resources</Anchor>
              </Link>
            </Menu>
          </section>
        </DocsArticle>
      </DocsSplit>
    );
  }
};

Introduction.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};

Introduction.childContextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};

class Document extends Component {

  getChildContext () {
    return {
      routePrefix: this.context.routePrefix + 'develop/'
    };
  }

  componentDidMount () {
    this._highlightCode();
  }

  componentDidUpdate () {
    this._highlightCode();
  }

  _highlightCode () {
    const nodes = document.querySelectorAll('pre code');
    for (var i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render () {
    return (
      <DocsSplit contents={CONTENTS} onChange={this._highlightCode}>
        {this.props.children}
      </DocsSplit>
    );
  }
};

Document.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};

Document.childContextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};

function createContentRoutes(contents) {
  let result = [];
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

export var routes = function () {
  var routes = createContentRoutes(CONTENTS);
  return [
    <Route key="top" path="develop" component={Introduction} />,
    <Route key="docs" path="develop" component={Document}>{routes}</Route>
  ];
};
