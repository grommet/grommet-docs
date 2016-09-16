// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import HelloWorld from './guides/HelloWorld';
import GetStarted from './guides/GetStarted';

import BestPractices from './design/BestPractices';
import Mobile from './design/Mobile';
import Color from './design/Color';
import Sizing from './design/Sizing';
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
import AnchorDoc from './components/anchor/AnchorDoc';
import AnchorExamplesDoc from './components/anchor/AnchorExamplesDoc';
import AnimateDoc from './components/AnimateDoc';
import AnnouncerDoc from './utils/AnnouncerDoc';
import AppDoc from './components/AppDoc';
import ArticleDoc from './components/ArticleDoc';
import BoxDoc from './components/box/BoxDoc';
import BoxExamplesDoc from './components/box/examples/BoxExamplesDoc';
import BoxingGymDoc from './components/box/BoxingGymDoc';
import BrickDoc from './components/BrickDoc';
import ButtonDoc from './components/button/ButtonDoc';
import ButtonExamplesDoc from './components/button/ButtonExamplesDoc';
import CalendarDoc from './components/CalendarDoc';
import CardDoc from './components/card/CardDoc';
import CardExamplesDoc from './components/card/examples/CardExamplesDoc';
import CarouselDoc from './components/CarouselDoc';
import ChartDoc from './components/chart/ChartDoc';
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
import ChartV1Doc from './components/chart/ChartV1Doc';
import CheckBoxDoc from './components/checkbox/CheckBoxDoc';
import CheckBoxExamplesDoc from './components/checkbox/CheckBoxExamplesDoc';
import ColumnsDoc from './components/ColumnsDoc';
import DateTimeDoc from './components/date-time/DateTimeDoc';
import DateTimeExamplesDoc from './components/date-time/DateTimeExamplesDoc';
import DistributionDoc from './components/distribution/DistributionDoc';
import DistributionExamplesDoc from
  './components/distribution/DistributionExamplesDoc';
import FooterDoc from './components/FooterDoc';
import FormDoc from './components/form/FormDoc';
import FormExamplesDoc from './components/form/FormExamplesDoc';
import FormFieldDoc from './components/FormFieldDoc';
import HeaderDoc from './components/HeaderDoc';
import HeadingDoc from './components/HeadingDoc';
import HeadlineDoc from './components/HeadlineDoc';
import HeroDoc from './components/HeroDoc';
import IconDoc from './components/IconDoc';
import ImageDoc from './components/image/ImageDoc';
import ImageExamplesDoc from './components/image/ImageExamplesDoc';
import LabelDoc from './components/LabelDoc';
import LayerDoc from './components/LayerDoc';
import LegendDoc from './components/LegendDoc';
import ListDoc from './components/ListDoc';
import LoginFormDoc from './components/LoginFormDoc';
import MapDoc from './components/MapDoc';
import MarkdownDoc from './components/MarkdownDoc';
import MenuDoc from './components/MenuDoc';
import MeterDoc from './components/meter/MeterDoc';
import MeterExamplesDoc from './components/meter/examples/MeterExamplesDoc';
import NavigationDoc from './patterns/NavigationDoc';
import NotificationDoc from './components/NotificationDoc';
import NumberInputDoc from './components/NumberInputDoc';
import ParagraphDoc from './components/ParagraphDoc';
import PulseDoc from './components/PulseDoc';
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
import TilesDoc from './components/tiles/TilesDoc';
import TilesExamplesDoc from './components/tiles/examples/TilesExamplesDoc';
import TimestampDoc from './components/TimestampDoc';
import TipDoc from './components/TipDoc';
import TitleDoc from './components/TitleDoc';
import TopologyDoc from './components/TopologyDoc';
import ValueDoc from './components/ValueDoc';
import VideoDoc from './components/video/VideoDoc';
import VideoExamplesDoc from './components/video/VideoExamplesDoc';
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
      {path: 'mobile', label: 'Mobile', component: Mobile},
      {path: 'color', label: 'Color', component: Color},
      {path: 'sizing', label: 'Sizing', component: Sizing},
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
      {path: 'anchor', label: 'Anchor', index: AnchorDoc, contents: [
        {path: 'examples', component: AnchorExamplesDoc}
      ]},
      {path: 'animate', label: 'Animate', component: AnimateDoc},
      {path: 'app', label: 'App', component: AppDoc},
      {path: 'article', label: 'Article', component: ArticleDoc},
      {path: 'box', label: 'Box', index: BoxDoc, contents: [
        {path: 'gym', component: BoxingGymDoc},
        {path: 'examples', component: BoxExamplesDoc}
      ]},
      {path: 'brick', label: 'Brick', component: BrickDoc},
      {path: 'button', label: 'Button', index: ButtonDoc, contents: [
        {path: 'examples', component: ButtonExamplesDoc}
      ]},
      {path: 'calendar', label: 'Calendar', component: CalendarDoc},
      {path: 'card', label: 'Card', index: CardDoc, contents: [
        {path: 'examples', component: CardExamplesDoc}
      ]},
      {path: 'carousel', label: 'Carousel', component: CarouselDoc},
      {path: 'chart', label: 'Chart', index: ChartDoc, contents: [
        {path: 'area', component: ChartAreaDoc},
        {path: 'axis', component: ChartAxisDoc},
        {path: 'bar', component: ChartBarDoc},
        {path: 'base', component: ChartBaseDoc},
        {path: 'examples', component: ChartExamplesDoc},
        {path: 'grid', component: ChartGridDoc},
        {path: 'hot-spots', component: ChartHotSpotsDoc},
        {path: 'layers', component: ChartLayersDoc},
        {path: 'line', component: ChartLineDoc},
        {path: 'marker', component: ChartMarkerDoc},
        {path: 'marker-label', component: ChartMarkerLabelDoc},
        {path: 'range', component: ChartRangeDoc}
      ]},
      {path: 'chart-v1', component: ChartV1Doc},
      {path: 'check-box', label: 'CheckBox', index: CheckBoxDoc, contents: [
        {path: 'examples', component: CheckBoxExamplesDoc}
      ]},
      {path: 'columns', label: 'Columns', component: ColumnsDoc},
      {path: 'date-time', label: 'DateTime', index: DateTimeDoc, contents: [
        {path: 'examples', component: DateTimeExamplesDoc}
      ]},
      {path: 'distribution', label: 'Distribution', index: DistributionDoc,
        contents: [
          {path: 'examples', component: DistributionExamplesDoc}
        ]},
      {path: 'footer', label: 'Footer', component: FooterDoc},
      {path: 'form', label: 'Form', index: FormDoc, contents: [
        {path: 'examples', component: FormExamplesDoc}
      ]},
      {path: 'form-field', label: 'FormField', component: FormFieldDoc},
      {path: 'header', label: 'Header', component: HeaderDoc},
      {path: 'heading', label: 'Heading', component: HeadingDoc},
      {path: 'headline', label: 'Headline', component: HeadlineDoc},
      {path: 'hero', label: 'Hero', component: HeroDoc},
      {path: 'icon', label: 'Icon', component: IconDoc},
      {path: 'image', label: 'Image', index: ImageDoc, contents: [
        {path: 'examples', component: ImageExamplesDoc}
      ]},
      {path: 'label', label: 'Label', component: LabelDoc},
      {path: 'layer', label: 'Layer', component: LayerDoc},
      {path: 'legend', label: 'Legend', component: LegendDoc},
      {path: 'list', label: 'List', component: ListDoc},
      {path: 'login-form', label: 'LoginForm', component: LoginFormDoc},
      {path: 'map', label: 'Map', component: MapDoc},
      {path: 'markdown', label: 'Markdown', component: MarkdownDoc},
      {path: 'menu', label: 'Menu', component: MenuDoc},
      {path: 'meter', label: 'Meter', index: MeterDoc, contents: [
        {path: 'examples', component: MeterExamplesDoc}
      ]},
      {path: 'notification', label: 'Notification', component: NotificationDoc},
      {path: 'number-input', label: 'NumberInput', component: NumberInputDoc},
      {path: 'paragraph', label: 'Paragraph', component: ParagraphDoc},
      {path: 'pulse', label: 'Pulse', component: PulseDoc},
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
      {path: 'tiles', label: 'Tiles', index: TilesDoc, contents: [
        {path: 'examples', component: TilesExamplesDoc}
      ]},
      {path: 'timestamp', label: 'Timestamp', component: TimestampDoc},
      {path: 'tip', label: 'Tip', component: TipDoc},
      {path: 'title', label: 'Title', component: TitleDoc},
      {path: 'topology', label: 'Topology', component: TopologyDoc},
      {path: 'value', label: 'Value', component: ValueDoc},
      {path: 'video', label: 'Video', index: VideoDoc, contents: [
        {path: 'examples', component: VideoExamplesDoc}
      ]},
      {path: 'world-map', label: 'WorldMap', component: WorldMapDoc}
    ]
  },
  {label: 'Utils',
    contents: [
      {path: 'announcer', label: 'Announcer', component: AnnouncerDoc},
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
