// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../DocsArticle');

var CONTROL_ICONS = [
  {component: require('grommet/components/icons/base/Add'), labels: ['Add']},
  {component: require('grommet/components/icons/base/Close'), labels: ['Clear', 'Close', 'Remove']},
  {component: require('grommet/components/icons/base/Edit'), labels: ['Edit', 'Settings', 'Actions']},
  {component: require('grommet/components/icons/base/More'), labels: ['More']},
  {component: require('grommet/components/icons/base/Drag'), labels: ['Drag handle']},
  {component: require('grommet/components/icons/base/Down'), labels: ['Drop caret']},
  {component: require('grommet/components/icons/base/Filter'), labels: ['Filter']},
  {component: require('grommet/components/icons/base/Search'), labels: ['Search']},
  {component: require('grommet/components/icons/base/Calendar'), labels: ['Calendar']},
  {component: require('grommet/components/icons/base/Help'), labels: ['Help']},
  {component: require('grommet/components/icons/base/LinkPrevious'), labels: ['Left', 'Previous']},
  {component: require('grommet/components/icons/base/LinkNext'), labels: ['Right', 'Next']},
  {component: require('grommet/components/icons/base/LinkUp'), labels: ['Up']},
  {component: require('grommet/components/icons/base/LinkTop'), labels: ['Top']},
  {component: require('grommet/components/icons/base/User'), labels: ['User']},
  {component: require('grommet/components/icons/base/Language'), labels: ['Language']},
  {component: require('grommet/components/icons/base/Mail'), labels: ['Mail']},
  {component: require('grommet/components/icons/base/SocialTwitter'), labels: ['Twitter']},
  {component: require('grommet/components/icons/base/SocialLinkedin'), labels: ['LinkedIn']},
  {component: require('grommet/components/icons/base/SocialFacebook'), labels: ['Facebook']}
];

var Spinning = require('grommet/components/icons/Spinning');
var Status = require('grommet/components/icons/Status');

var STATUS_ICONS = [
  {component: Status, value: 'Critical', labels: ['Critical']},
  {component: Status, value: 'warning', labels: ['Warning']},
  {component: Status, value: 'ok', labels: ['OK', 'Normal']},
  {component: Status, value: 'unknown', labels: ['Unknown']},
  {component: Status, value: 'disabled', labels: ['Disabled']},
  {component: Status, value: 'label', labels: ['Label', 'Table header']}
];

var Basics = React.createClass({

  componentDidMount: function () {
    var fontNameElement = this.refs.fontName;
    var fontFamily = window.getComputedStyle(fontNameElement).fontFamily;
    fontNameElement.innerHTML = fontFamily.split(',')[0];
  },

  render: function () {
    var controlIcons = CONTROL_ICONS.map(function (item) {
      var labels = item.labels.map(function (label) {
        return (<span key={label}>{label}</span>);
      });
      return (
        <div key={item.labels[0]} className="icon-tile">
          {React.createFactory(item.component)()}
          <label>{labels}</label>
        </div>
      );
    });

    var statusIcons = STATUS_ICONS.map(function (item) {
      var labels = item.labels.map(function (label) {
        return (<span key={label}>{label}</span>);
      });
      return (
        <div key={item.labels[0]} className="icon-tile">
          {React.createFactory(item.component)({value: item.value, size: 'large'})}
          {React.createFactory(item.component)({value: item.value})}
          {React.createFactory(item.component)({value: item.value, size: 'small'})}
          <label>{labels}</label>
        </div>
      );
    });

    return (
      <DocsArticle title="Basics" colorIndex="neutral-2">
        <p>Here you will find the core elements for the application style guide.
        The downloadable assets contain these core elements. Checkboxes, buttons,
        status icons and more are all described in these assets.
        Rather than documenting these in gory detail, we thought you would
        appreciate the brevity. We also think you really just want to see them anyway,
        so why waste your time?</p>
        <section>
          <a className="anchor" id="color"></a>
          <h2>Color</h2>
          <div className="generic-branding">
            <p>These are the generic, or un-branded, colors. It is expected that
              applications will define their own brand color scheme.</p>
          </div>
          <div className="hpe-branding">
          <p>The Hewlett Packard Enterprise color palette is utilized in applications for the
          most part. However there are variances in the palette that apply specifically
          to applications.</p>

          <p>For application design the Hewlett Packard Enterprise orange/salmon accent color
          is modified to be more red so it can be used as a status indicator and it should
          not be used as an accent color in non-status contexts.</p>

          <p>Also, dark yellow color is added for use as a warning status color.</p>
          </div>

          <h3>Primary</h3>
          <span className="swatch brand"></span>
          <h3>Accent</h3>
          <span className="swatch accent-1"></span>
          <span className="swatch accent-2"></span>
          <span className="swatch accent-3"></span>
          <h3>Neutral</h3>
          <span className="swatch neutral-1"></span>
          <span className="swatch neutral-2"></span>
          <span className="swatch neutral-3"></span>
          <span className="swatch neutral-4"></span>
          <span className="swatch neutral-5"></span>

          <h3>Status</h3>
          <p>These colors are used to convey status.</p>
          <span className="swatch status-error"></span>
          <span className="swatch status-warning"></span>
          <span className="swatch status-ok"></span>
          <span className="swatch status-unknown"></span>

          <h3>Graph</h3>
          <p>These colors are used to draw graphs and charts.</p>
          <span className="swatch graph-1"></span>
          <span className="swatch graph-2"></span>
          <span className="swatch graph-3"></span>
          <span className="swatch graph-4"></span>
          <span className="swatch graph-5"></span>
          <span className="swatch graph-6"></span>

        </section>

        <section>
          <a className="anchor" id="padding"></a>
          <h2>Padding</h2>

          <p>Padding on elements is based off of multiples and fractions of 24px. This value is used for line height, sizing, padding and margins on objects, etc.</p>

          <h3>Padding and sizing on components</h3>

          <p>Many components expose sizing and padding via <code>size</code> and <code>pad</code> attributes. For example, <code>Header</code> accepts <code>small</code>, <code>medium</code> and <code>large</code> as <code>size</code> attributes, which sets the height of the <code>Header</code> component to 48px, 72px, or 96px, respectively.
          </p>

          <p>
            Components that accept the <code>size</code> attribute include:

            <ul>
              <li><code>Chart</code></li>
              <li><code>Distribution</code></li>
              <li><code>Footer</code></li>
              <li><code>Header</code></li>
              <li><code>Image</code> (<code>small</code> and <code>large</code> only. <code>small</code> = 240px; <code>large</code> = 960px)</li>
              <li><code>List</code></li>
              <li><code>Menu</code></li>
              <li><code>Meter</code></li>
              <li><code>Search</code> (<code>medium</code> and <code>large</code> only)</li>
              <li><code>Sidebar</code> (<code>small</code> = 240px; <code>medium</code> = 336px; <code>large</code> = 360px)</li>
              <li><code>Status</code> (<code>small</code> = 12px; <code>medium</code> = 24px; <code>large</code> = 48px)</li>
              <li><code>Tile</code> (<code>small</code> = 96px; <code>medium</code> = 192px; <code>large</code> = 384px)</li>
              <li><code>Video</code> (<code>small</code> = 240px; <code>medium</code> = 480px; <code>large</code> = 960px)</li>
            </ul>
          </p>

          <p>
            Components that accept the <code>pad</code> attribute include:

            <ul>
              <li><code>Article</code></li>
              <li><code>Box</code></li>
              <li><code>Footer</code></li>
              <li><code>Form</code> (all <code>pad</code> attributes available, except for <code>between</code>)</li>
              <li><code>Header</code></li>
              <li><code>ListItem (in List)</code></li>
              <li><code>Menu</code></li>
              <li><code>Section</code></li>
              <li><code>Sidebar</code></li>
              <li><code>Tiles/Tile</code></li>
            </ul>

            For the <code>pad</code> attribute, <code>small</code> = 12px, <code>medium</code> = 24px, and <code>large</code> = 48px.
          </p>

          <p>
            The <code>pad</code> attribute can be set to <code>small</code>, <code>medium</code>, or <code>large</code>, or an object which affects the padding of components horizontally, vertically, or in-between multiple components: <code>{"{horizontal: none|small|medium|large, vertical: none|small|medium|large, between: none|small|medium|large}"}</code>. Padding set using <code>between</code> only affects components based on the direction set (adds horizontal padding between components for <code>row</code>, or vertical padding between components for <code>column</code>).
          </p>
        </section>

        <section>
          <a className="anchor" id="text"></a>
          <h2>Text</h2>
          <p>Text and Typography is arguably one of the most important elements of
          style to get right. Ironically, when done well the text styles and typography
          disappear from the users consciousness and they simply enjoy the beautiful
          and fluid experience. However, when done poorly, the typography can be a
          reason an application just doesn’t feel right. Everything from displeasing
          aesthetics, to unclear organization of information, to physical eye strain
          can result from an application with insufficient attention to this detail.</p>

          <a className="anchor" id="typography"></a>
          <h3>Typography</h3>
          <p>Applications use the <span ref="fontName">Arial</span> font.  The
          typographic scale and styles can be found in the attached assets.</p>
          <h1 className="font-sample">H1 font sample</h1>
          <h2 className="font-sample">H2 font sample</h2>
          <h3 className="font-sample">H3 font sample</h3>
          <h4 className="font-sample">H4 font sample</h4>
          <h5 className="font-sample">H5 font sample</h5>

          <a className="anchor" id="writing-style"></a>
          <h3>Writing Style</h3>
          <p>Applications should use a conversational tone and should not include
          excessive technical jargon.</p>

          <p>Here are some things we recommend you consider when writing for applications:</p>

          <h3>Do’s</h3>
          <ul>
            <li>Use simple yet complete sentences.</li>
            <li>Use correct punctuation.</li>
            <li>Use the present tense to describe problem states.</li>
            <li>Use past tense to describe events that occurred in the past.</li>
            <li>Use an active voice whenever possible.</li>
            <li>Passive voice is acceptable to describe some error conditions.</li>
            <li>Use descriptors to clarify terminology. For example, “Specify InflD
            when Detect is set to NO.” We instead recommend something along the
            lines of “Specify the InflD parameter when the Detect option is set
            to NO”.</li>
          </ul>

          <h3>Don’ts</h3>
          <ul>
            <li>Do not use UPPERCASE in text or exclamation points!!!!</li>
            <li>Do not make the user feel at fault.</li>
            <li>Do not anthropomorphize by implying that the programs or hardware
            can think or feel.</li>
            <li>Do not use colloquial words or phrases.</li>
            <li>Do not use terms that may be offensive in certain cultures.</li>
            <li>Do not compound several nouns without adding a preposition or
            subclause to clarify the meaning. For example, “Site Server LDAP
            Service directory server” should be changed to “Directory server for
            the LDAP Service of the Site Server”.</li>
            <li>Avoid the use of the word “bad”. Use more descriptive terms to
            tell the user as to what is wrong. For example, avoid messages such
            as “Bad size”. Instead, tell the user what criteria to use when
            specifying a size.</li>
            <li>Avoid the use of the word “please”. It can imply that a required
            action is optional.</li>
          </ul>

          <a className="anchor" id="date-time"></a>
          <h3>Date and Time</h3>
          <p>Date and time formats should generally be displayed in the user’s
          local timezone.  Any exceptions to this should include the timezone being
          used to display the time and date. Here are examples of recommended
          date and time
          formats. The <a href="http://index.grommet.io/docs/grommet-index/timestamp">
          Timestamp</a> component
          in <code>grommet-index</code> provides an implementation of this.
          </p>

          <ul>
            <li>Apr 28, 2016 2:47 pm</li>
            <li>Apr 28, 2016</li>
            <li>Apr 28</li>
            <li>2:47 pm</li>
            <li>Apr 28, 2016 2:47:23 pm</li>
          </ul>

          <a className="anchor" id="capitalization"></a>
          <h3>Capitalization</h3>
          <p>For the English language, we recommend using English title capitalization
          rules for titles (i.e. generally, capitalize the first letter of each word). Titles
          include the following user interface elements:</p>
          <ul>
            <li>Page titles</li>
            <li>Panel titles</li>
            <li>Section headings</li>
            <li>Form section titles</li>
            <li>Table headers</li>
            <li>Dialog titles (reference rule #8: grammarbook.com)</li>
          </ul>

          <h4>Sentence Capitalization</h4>
          <p>Capitalize only the first letter of data labels unless a word used in the
          data label otherwise deserves capitalization because of English capitalization
          rules (e.g. proper names, abbreviations, etc).</p>

          <p>Data labels include the following UI elements:</p>
          <ul>
            <li>Radio button labels</li>
            <li>Checkbox labels</li>
            <li>Form property labels</li>
            <li>Panel property labels</li>
            <li>Button labels</li>
            <li>Action menu items</li>
            <li>Hyperlinks to actions</li>
            <li>Hint text</li>
            <li>Help text</li>
          </ul>

          <h4>Attributes</h4>
          <p>Capitalize only the first letter of attributes unless a word used in
          the attribute otherwise deserves capitalization because of English
          capitalization rules (e.g. proper names, abbreviations, etc). User-entered
          attributes will retain the user’s capitalization.</p>

          <h4>Exceptions</h4>
          <p>The English language is full of exceptions, so we felt compelled.
          For attribute values which indicate the property or data field hasn’t
          been set or the location is intentionally left empty, we use the
          non-capitalized words or phrases such as “empty”, “none”, “not set”,
          “unassigned”, or “no alerts”.</p>

          <p>Some specific words and acronyms are always capitalized for branding
          or common industry recognition.</p>

          <p>Examples:</p>
          <ul>
            <li>VLAN</li>
            <li>IPv4</li>
            <li>IPv6</li>
            <li>WWN</li>
          </ul>

          <h4>Capitalization in APIs</h4>
          <p>Yes, our application users make use of our APIs, so it’s important
          to provide a familiar voice to our users, regardless of the interface
          they are using.</p>

          <h5>PascalCase</h5>
          <ul>
            <li>Schema names</li>
            <li>Schema enum values</li>
          </ul>

          <h5>camelCase</h5>
          <p>The following API elements should be rendered in camelCase:</p>
          <ul>
            <li>Schema attribute names</li>
          </ul>
        </section>

        <section>
          <a className="anchor" id="icons"></a>
          <h2>Icons</h2>
          <p>Icons are used for inline controls. Users should be able to identify
            an icon’s function without any supporting text decoration. This is why
            we have a fairly small icon set. Text is used for non-iconifiable controls.</p>

          <h3>Controls</h3>
          <p>Control icons have a larger hit area around them to work well on mobile platforms.</p>
          <div className="example">
            {controlIcons}
          </div>

          <h3>Status</h3>
          <p>Status icons come in multiple sizes for use in different contexts.
            They are differentiated both by color and by shape for accessibility.
            Typically, status icons are placed immediately to the left of the label
            indicating what object they are indicating the status of.</p>
          <div className="example">
            {statusIcons}
          </div>
          <p>When something is occuring that could lead to a change in status, a changing
            icon is added next to the status icon. This changing icon is placed to the
            right of the status icon when laying out horizontally, and below when laying
            out vertically.</p>
          <div className="example">
            <div className="icon-tile">
              <div><Spinning /></div>
              <div><Spinning small={true} /></div>
              <label>
                <span>Changing</span>
                <span>Loading</span>
              </label>
            </div>
          </div>

        </section>
      </DocsArticle>
    );
  }
});

module.exports = Basics;
