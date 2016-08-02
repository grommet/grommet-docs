// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component,  PropTypes } from 'react';
import jsxToString from 'jsx-to-string';

export default class Example extends Component {

  _renderCode () {
    const { code, overrides } = this.props;
    let keyValueOverride = {};
    if (overrides) {
      overrides.forEach(override => {
        keyValueOverride[override] = `this._${override}`;
      });
    }
    return jsxToString(code, { keyValueOverride: keyValueOverride });
  }

  render () {
    const { code, control, name } = this.props;
    let heading;
    if (name) {
      heading = <h3>{name}</h3>;
    }
    return (
      <div>
        {heading}
        <div className="example">
          {control || code}
        </div>
        <pre><code className="html hljs xml">
          {this._renderCode()}
        </code></pre>
      </div>
    );
  }
}

Example.propTypes = {
  code: PropTypes.node.isRequired,
  control: PropTypes.node, // for LayerDoc
  name: PropTypes.string,
  overrides: PropTypes.arrayOf(PropTypes.string)
};
