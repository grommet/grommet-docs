// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var LoginForm = require('grommet/components/LoginForm');
var Logo = require('../../img/Logo');

var LoginFormDoc = React.createClass({

  _onSubmit: function (fields) {
    // no-op
  },

  render: function() {
    var inline = "<LoginForm onSubmit={...} />";
    return (
      <DocsArticle title="LoginForm" colorIndex="neutral-3">

        <p>The form used to log in.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>align        start|center|end</code></dt>
            <dd>How to align the contents along the cross axis.</dd>
            <dt><code>defaultValues   {"{username: ..., rememberMe: true|false}"}</code></dt>
            <dd>Default values for username and rememberMe</dd>
            <dt><code>errors          {"[{message}, ...]"}</code></dt>
            <dd>An array of error messages. Use this if there is a failure to log in.</dd>
            <dt><code>forgotPassword  {"{component}"}</code></dt>
            <dd>A link that would take the user to a new page.</dd>
            <dt><code>logo            {"{component}"}</code></dt>
            <dd>A logo component.</dd>
            <dt><code>onSubmit        {"function ({username: ..., password: ..., rememberMe: ...}) {...}"}</code></dt>
            <dd>Function that will be called with the username, password and rememberMe provided.</dd>
            <dt><code>rememberMe      true|false</code></dt>
            <dd>Whether to include a remember me input.</dd>
            <dt><code>secondaryText   {"{string}"}</code></dt>
            <dd>Secondary text related to the product.</dd>
            <dt><code>title           {"{string}"}</code></dt>
            <dd>The product name.</dd>
            <dt><code>usernameType    text|email</code></dt>
            <dd>The type of username input. Defaults to email.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Simple</h3>
          <div className="example">
            <LoginForm onSubmit={this._onSubmit} />
          </div>
          <pre><code className="html hljs xml">{"<LoginForm onSubmit={...}/>"}</code></pre>

          <h3>Full</h3>
          <div className="example">
            <LoginForm logo={<Logo />} title="Product Name"
              secondaryText="Product Secondary Text"
              onSubmit={this._onSubmit}
              rememberMe={true} forgotPassword={<a>Forgot password?</a>}
              errors={["Invalid username or password."]}
              defaultValues={{
                username: 'username@grommet.io',
                rememberMe: true
              }}
            />
          </div>
          <pre><code className="html hljs xml">{"<LoginForm\n  logo={<Logo />}\n  title=\"Product Name\"\n  secondaryText=\"Product Secondary Text\"\n  rememberMe={true}\n  forgotPassword={<a>...</a>}\n  onSubmit={...}\n  errors={[\"Invalid username or password.\"]}\n  defaultValues={{\n    username: 'username@grommet.io',\n    rememberMe: true\n  }}\n/>"}</code></pre>

          <h3>Full, Start</h3>
          <div className="example">
            <LoginForm align="start" logo={<Logo />} title="Product Name"
              secondaryText="Product Secondary Text"
              onSubmit={this._onSubmit}
              rememberMe={true} forgotPassword={<a>Forgot password?</a>}
              errors={["Invalid username or password."]}
              defaultValues={{
                username: 'username@grommet.io',
                rememberMe: true
              }}
            />
          </div>
          <pre><code className="html hljs xml">{"<LoginForm\n  align=\"start\" logo={<Logo />}\n  title=\"Product Name\"\n  secondaryText=\"Product Secondary Text\"\n  rememberMe={true}\n  forgotPassword={<a>...</a>}\n  onSubmit={...}\n  errors={[\"Invalid username or password.\"]}\n  defaultValues={{\n    username: 'username@grommet.io',\n    rememberMe: true\n  }}\n/>"}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = LoginFormDoc;
