// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component,  PropTypes } from 'react';
import jsxToString from 'jsx-to-string';
import Box from 'grommet/components/Box';

//hjjs configuration
const hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript',
  require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

export default class Example extends Component {

  componentDidMount () {
    hljs.highlightBlock(this.refs.code);
  }

  componentDidUpdate () {
    hljs.highlightBlock(this.refs.code);
  }

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
    const { align, full, code, control, name, preamble } = this.props;
    let heading;
    if (name) {
      heading = <h3>{name}</h3>;
    }
    let importStatement;
    if (preamble) {
      // Ensure we end with a newline so any code starts on the next line.
      importStatement = preamble.replace(/[^\n]$/, "\n");
    }
    let codeElement;
    if (code) {
      codeElement = this._renderCode();
    }

    return (
      <Box full={full} flex={true} pad={{horizontal: 'medium'}}>
        {heading}
        <Box pad={{ between: 'medium' }} align={align}>
          {control || code}
          <pre >
            <code ref='code' className="html xml hljs">
              {`${importStatement || ''}${codeElement || ''}`}
            </code>
          </pre>
        </Box>
      </Box>
    );
  }
}

Example.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  code: PropTypes.node,
  control: PropTypes.node, // for LayerDoc
  name: PropTypes.string,
  overrides: PropTypes.arrayOf(PropTypes.string),
  preamble: PropTypes.string,
  full: PropTypes.oneOf([true, 'horizontal', 'vertical', false])
};
