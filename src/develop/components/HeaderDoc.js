// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Header = require('grommet/components/Header');
var Menu = require('grommet/components/Menu');
var Search = require('grommet/components/Search');
var Title = require('grommet/components/Title');
var ActionsLogo = require('grommet/components/icons/base/Actions');
var NotificationIcon = require('grommet/components/icons/base/Notification');
var UserSettingsIcon = require('grommet/components/icons/base/UserSettings');
var Logo = require('../../img/Logo');

var HeaderDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  render: function() {
    var inline =
    "<Header>\n  <Link to={route}>{label}</Link>\n  ...\n</Header>";
    return (
      <DocsArticle title="Header" colorIndex="neutral-3">

        <p>Combines Title and Menu elements responsively.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>fixed       true|false</code></dt>
            <dd>Whether the header is fixed on the page, typically so content
              below it will scroll under it.</dd>
            <dt><code>float       true|false</code></dt>
            <dd>Whether the header floats above content underneath it.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Header. Defaults to <code>medium</code>.</dd>
            <dt><code>splash      true|false</code></dt>
            <dd>Whether to render it in a style suitable for a splash screen.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Title and Search</h3>
          <div className="example">
            <Header>
              <Title>Title</Title>
              <Search inline={true} />
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header> ..."}</code></pre>

          <h3>Title, inline Menu, and Search</h3>
          <div className="example">
            <Header justify="between">
              <Title>Title</Title>
              <Menu direction="row" align="center" responsive={false}>
                <a href="#" className="active">First</a>
                <a href="#">Second</a>
                <a href="#">Third</a>
                <Search dropAlign={{right: "right"}} />
              </Menu>
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header> ..."}</code></pre>

          <h3>Logo, title and icon Menu</h3>
          <div className="example">
            <Header justify="between">
              <Title><Logo /> Title</Title>
              <Menu icon={<ActionsLogo />} dropAlign={{right: "right"}}>
                <a href="#" className="active">First</a>
                <a href="#">Second</a>
                <a href="#">Third</a>
              </Menu>
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header> ..."}</code></pre>

          <h3>Logo, title and labelled Menu</h3>
          <div className="example">
            <Header justify="between">
              <Title><Logo /> Title</Title>
              <Menu label="Label" dropAlign={{right: "right"}}>
                <a href="#" className="active">First</a>
                <a href="#">Second</a>
                <a href="#">Third</a>
              </Menu>
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header> ..."}</code></pre>

          <h3>Large</h3>
          <div className="example">
            <Header size="large" justify="between">
              <Title><Logo /> Title</Title>
              <Menu icon={<ActionsLogo />} dropAlign={{right: "right"}}>
                <a href="#" className="active">First</a>
                <a href="#">Second</a>
                <a href="#">Third</a>
              </Menu>
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header size=\"large\"> ..."}</code></pre>

          <h3>Small</h3>
          <div className="example">
            <Header size="small" justify="between">
              <Title><Logo /> Title</Title>
              <Menu icon={<ActionsLogo />} dropAlign={{right: "right"}}>
                <a href="#" className="active">First</a>
                <a href="#">Second</a>
                <a href="#">Third</a>
              </Menu>
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header size=\"small\"> ..."}</code></pre>

          <h3>Title menu and icon Menu</h3>
          <div className="example">
            <Header size="large" justify="between">
              <Title onClick={function () {}}><Logo /> Title</Title>
              <Menu icon={<ActionsLogo />} dropAlign={{right: "right"}}>
                <a href="#" className="active">First</a>
                <a href="#">Second</a>
                <a href="#">Third</a>
              </Menu>
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header size=\"large\"> ..."}</code></pre>

          <h3>Tag, Separator</h3>
          <div className="example">
            <Header tag="h4" separator="top">Heading Text</Header>
          </div>
          <pre><code className="html hljs xml">{"<Header tag=\"h4\" separator=\"top\"> ..."}</code></pre>

          <h3>Large, Title Menu and icon Menu, colored</h3>
          <div className="example">
            <Header size="large" justify="between" colorIndex="neutral-1" pad={{horizontal: 'medium'}}>
              <Title onClick={function () {}}><Logo inverse={true} /> Title</Title>
              <Menu icon={<ActionsLogo />}
                dropAlign={{right: "right"}}
                dropColorIndex="neutral-1">
                <a href="#" className="active">First</a>
                <a href="#">Second</a>
                <a href="#">Third</a>
              </Menu>
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header size=\"large\" justify=\"between\" colorIndex=\"neutral-1\" pad={{vertical: 'small'}}> ..."}</code></pre>

          <h3>Logo, Title and nested Menus, colored</h3>
          <div className="example">
            <Header justify="between" colorIndex="neutral-1" pad={{horizontal: 'medium'}}>
              <Title><Logo inverse={true} /> Title</Title>
              <Menu inline={true} responsive={false} direction="row">
                <Menu icon={<NotificationIcon />}
                  dropAlign={{right: "right"}}
                  dropColorIndex="neutral-1">
                  <a href="#" className="active">First</a>
                  <a href="#">Second</a>
                  <a href="#">Third</a>
                </Menu>
                <Menu icon={<UserSettingsIcon />}
                  dropAlign={{right: "right"}}
                  dropColorIndex="neutral-1">
                  <a href="#" className="active">First</a>
                  <a href="#">Second</a>
                  <a href="#">Third</a>
                </Menu>
              </Menu>
            </Header>
          </div>
          <pre><code className="html hljs xml">{"<Header> ..."}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = HeaderDoc;
