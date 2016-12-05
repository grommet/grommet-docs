// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Children, Component, PropTypes } from 'react';
import jsxToString from 'jsx-to-string';

//hjjs configuration
import hljs from 'highlight.js/lib/highlight';
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript',
  require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

export default class Code extends Component {

  constructor (props) {
    super(props);
    this.state = { codeString: this._stringifyCode(props) };
  }

  componentDidMount () {
    hljs.highlightBlock(this._codeRef);
  }

  componentWillReceiveProps (nextProps) {
    const codeString =  this._stringifyCode(nextProps);
    this.setState({ codeString });
  }

  componentDidUpdate () {
    hljs.highlightBlock(this._codeRef);
  }

  _stringifyCode (props) {
    const { children, overrides, preamble } = props;
    let result = '';
    if (preamble) {
      result += `${(preamble)}\n\n`;
    }
    if (children) {
      let keyValueOverride = {};
      if (overrides) {
        overrides.forEach(override => {
          keyValueOverride[override] = `this._${override}`;
        });
      }
      const childString = jsxToString(Children.only(children),
        { keyValueOverride: keyValueOverride })
        .replace('null', 'undefined');
      result += childString;
    }
    return result;
  }

  render () {
    const { codeString }  = this.state;
    return (
      <pre className='code'>
        <code ref={ref => this._codeRef = ref} className='html xml hljs'>
          {codeString}
        </code>
      </pre>
    );
  }
}

Code.propTypes = {
  overrides: PropTypes.arrayOf(PropTypes.string),
  preamble: PropTypes.string
};
