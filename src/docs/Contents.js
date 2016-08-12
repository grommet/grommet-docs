// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

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
// import Learn from './design/Learn';

import Architecture from './reference/Architecture';
import Integration from './reference/Integration';
import Accessibility from './reference/Accessibility';
import BrowserSupport from './reference/BrowserSupport';
import About from './reference/About';

// import ActionsDoc from './patterns/ActionsDoc';
import AccordionDoc from './components/AccordionDoc';
import AnchorDoc from './components/AnchorDoc';
import AppDoc from './components/AppDoc';
import ArticleDoc from './components/ArticleDoc';
import BoxDoc from './components/BoxDoc';
import BrickDoc from './components/BrickDoc';
import ButtonDoc from './components/ButtonDoc';
import CalendarDoc from './components/CalendarDoc';
import CarouselDoc from './components/CarouselDoc';
import ChartDoc from './components/ChartDoc';
import ChartAreaDoc from './components/chart/AreaDoc';
import ChartAxisDoc from './components/chart/AxisDoc';
import ChartBarDoc from './components/chart/BarDoc';
import ChartBaseDoc from './components/chart/BaseDoc';
import ChartGridDoc from './components/chart/GridDoc';
import ChartHotSpotsDoc from './components/chart/HotSpotsDoc';
import ChartLayersDoc from './components/chart/LayersDoc';
import ChartLineDoc from './components/chart/LineDoc';
import ChartMarkerDoc from './components/chart/MarkerDoc';
import ChartMarkerLabelDoc from './components/chart/MarkerLabelDoc';
import ChartRangeDoc from './components/chart/RangeDoc';
import ChartExamplesDoc from './components/chart/examples/ChartExamplesDoc';
import ChartV1Doc from './components/ChartV1Doc';
import CheckBoxDoc from './components/CheckBoxDoc';
import ColumnsDoc from './components/ColumnsDoc';
// import DashboardDoc from './patterns/DashboardDoc';
import DateTimeDoc from './components/DateTimeDoc';
import DistributionDoc from './components/DistributionDoc';
import FooterDoc from './components/FooterDoc';
import FormDoc from './components/FormDoc';
import FormFieldDoc from './components/FormFieldDoc';
import HeaderDoc from './components/HeaderDoc';
import HeadingDoc from './components/HeadingDoc';
import HeadlineDoc from './components/HeadlineDoc';
import HeroDoc from './components/HeroDoc';
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
import MeterExamplesDoc from './components/meter/examples/MeterExamplesDoc';
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
import SunBurstDoc from './components/SunBurstDoc';
import TableDoc from './components/TableDoc';
import TabsDoc from './components/TabsDoc';
import TagsDoc from './components/TagsDoc';
import TilesDoc from './components/TilesDoc';
import TilesExamplesDoc from './components/tiles/examples/TilesExamplesDoc';
import TipDoc from './components/TipDoc';
import TitleDoc from './components/TitleDoc';
import TopologyDoc from './components/TopologyDoc';
import ValueDoc from './components/ValueDoc';
import VideoDoc from './components/VideoDoc';
import WorldMapDoc from './components/WorldMapDoc';

export default [
  {label: 'Guides',
    contents: [
      {path: 'hello-world', label: 'Hello World',
        component: HelloWorld},
      {path: 'get-started', label: 'Get Started',
        component: GetStarted}
    ]
  },
  {label: 'Design',
    contents: [
      // {path: 'learn', label: 'Learn', component: Learn},
      {path: 'resources', label: 'Resources', component: Resources},
      {path: 'best-practices', label: 'Best Practices',
        component: BestPractices},
      {path: 'usability', label: 'Usability', component: Usability},
      {path: 'interactions', label: 'Interactions', component: Interactions},
      {path: 'mobile', label: 'Mobile', component: Mobile},
      {path: 'color', label: 'Color', component: Color},
      {path: 'padding', label: 'Padding', component: Padding},
      {path: 'typography', label: 'Typography', component: Typography},
      {path: 'writing-style', label: 'Writing Style', component: WritingStyle},
      {path: 'date-and-time', label: 'Date and Time', component: DateTime},
      {path: 'capitalization', label: 'Capitalization',
        component: Capitalization}
    ]},
  {label: 'Patterns',
    contents: [
      // {path: 'dashboard', label: 'Dashboard', component: DashboardDoc},
      {path: 'navigation', label: 'Navigation', component: NavigationDoc}
      // {path: 'actions', label: 'Actions', component: ActionsDoc}
    ]
  },
  {label: 'Components',
    contents: [
      {path: 'accordion', label: 'Accordion', component: AccordionDoc},
      {path: 'anchor', label: 'Anchor', component: AnchorDoc},
      {path: 'app', label: 'App', component: AppDoc},
      {path: 'article', label: 'Article', component: ArticleDoc},
      {path: 'box', label: 'Box', component: BoxDoc},
      {path: 'brick', label: 'Brick', component: BrickDoc},
      {path: 'button', label: 'Button', component: ButtonDoc},
      {path: 'calendar', label: 'Calendar', component: CalendarDoc},
      {path: 'carousel', label: 'Carousel', component: CarouselDoc},
      {path: 'chart', label: 'Chart', component: ChartDoc, contents: [
        {path: 'chart-area', component: ChartAreaDoc},
        {path: 'chart-axis', component: ChartAxisDoc},
        {path: 'chart-bar', component: ChartBarDoc},
        {path: 'chart-base', component: ChartBaseDoc},
        {path: 'chart-examples', component: ChartExamplesDoc},
        {path: 'chart-grid', component: ChartGridDoc},
        {path: 'chart-hot-spots', component: ChartHotSpotsDoc},
        {path: 'chart-layers', component: ChartLayersDoc},
        {path: 'chart-line', component: ChartLineDoc},
        {path: 'chart-marker', component: ChartMarkerDoc},
        {path: 'chart-marker-label', component: ChartMarkerLabelDoc},
        {path: 'chart-range', component: ChartRangeDoc}
      ]},
      {path: 'chart-v1', component: ChartV1Doc},
      {path: 'check-box', label: 'CheckBox', component: CheckBoxDoc},
      {path: 'columns', label: 'Columns', component: ColumnsDoc},
      {path: 'date-time', label: 'DateTime', component: DateTimeDoc},
      {path: 'distribution', label: 'Distribution', component: DistributionDoc},
      {path: 'footer', label: 'Footer', component: FooterDoc},
      {path: 'form', label: 'Form', component: FormDoc},
      {path: 'form-field', label: 'FormField', component: FormFieldDoc},
      {path: 'header', label: 'Header', component: HeaderDoc},
      {path: 'heading', label: 'Heading', component: HeadingDoc},
      {path: 'headline', label: 'Headline', component: HeadlineDoc},
      {path: 'hero', label: 'Hero', component: HeroDoc},
      {path: 'icon', label: 'Icon', component: IconDoc},
      {path: 'image', label: 'Image', component: ImageDoc},
      {path: 'label', label: 'Label', component: LabelDoc},
      {path: 'layer', label: 'Layer', component: LayerDoc},
      {path: 'legend', label: 'Legend', component: LegendDoc},
      {path: 'list', label: 'List', component: ListDoc},
      {path: 'login-form', label: 'LoginForm', component: LoginFormDoc},
      {path: 'map', label: 'Map', component: MapDoc},
      {path: 'menu', label: 'Menu', component: MenuDoc},
      {path: 'meter', label: 'Meter', component: MeterDoc, contents: [
        {path: 'meter-examples', component: MeterExamplesDoc}
      ]},
      {path: 'notification', label: 'Notification', component: NotificationDoc},
      {path: 'number-input', label: 'NumberInput', component: NumberInputDoc},
      {path: 'paragraph', label: 'Paragraph', component: ParagraphDoc},
      {path: 'quote', label: 'Quote', component: QuoteDoc},
      {path: 'radio-button', label: 'RadioButton', component: RadioButtonDoc},
      {path: 'search', label: 'Search', component: SearchDoc},
      {path: 'search-input', label: 'SearchInput', component: SearchInputDoc},
      {path: 'section', label: 'Section', component: SectionDoc},
      {path: 'sidebar', label: 'Sidebar', component: SidebarDoc},
      {path: 'social-share', label: 'SocialShare', component: SocialShareDoc},
      {path: 'spinning', label: 'Spinning', component: SpinningDoc},
      {path: 'split', label: 'Split', component: SplitDoc},
      {path: 'status', label: 'Status', component: StatusDoc},
      {path: 'sun-burst', label: 'SunBurst', component: SunBurstDoc},
      {path: 'table', label: 'Table', component: TableDoc},
      {path: 'tabs', label: 'Tabs', component: TabsDoc},
      {path: 'tags', label: 'Tags', component: TagsDoc},
      {path: 'tiles', label: 'Tiles', component: TilesDoc, contents: [
        {path: 'tiles-examples', component: TilesExamplesDoc}
      ]},
      {path: 'tip', label: 'Tip', component: TipDoc},
      {path: 'title', label: 'Title', component: TitleDoc},
      {path: 'topology', label: 'Topology', component: TopologyDoc},
      {path: 'value', label: 'Value', component: ValueDoc},
      {path: 'video', label: 'Video', component: VideoDoc},
      {path: 'world-map', label: 'WorldMap', component: WorldMapDoc}
    ]
  },
  {label: 'Utils',
    contents: [
      {path: 'markdown', label: 'Markdown', component: MarkdownDoc},
      {path: 'rest', label: 'Rest', component: RestDoc},
      {path: 'rest-watch', label: 'RestWatch', component: RestWatchDoc}
    ]
  },
  {label: 'Reference',
    contents: [
      {path: 'architecture', label: 'Architecture',
        component: Architecture},
      {path: 'integration', label: 'Integration',
        component: Integration},
      {path: 'accessibility', label: 'Accessibility',
        component: Accessibility},
      {path: 'browser-support', label: 'Browser Support',
        component: BrowserSupport},
      {path: 'about', label: 'About', component: About}
    ]
  }
];
