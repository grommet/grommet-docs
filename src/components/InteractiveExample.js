// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import CheckBox from 'grommet/components/CheckBox';
import BackIcon from 'grommet/components/icons/base/LinkPrevious';
import CloseIcon from 'grommet/components/icons/base/Close';
import CodeIcon from 'grommet/components/icons/base/Code';
import EditIcon from 'grommet/components/icons/base/Edit';
// import ClipboardIcon from 'grommet/components/icons/base/Clipboard';
import ContextFields from './ContextFields';
import Context from './Context';
import Code from './Code';

const CONTEXT_PROP_REGEXP = /^c\-(.+)/;
const CONTENTS_PROP_REGEXP = /^i\-(.+)/;

class PropFields extends Component {

  _select (property) {
    return (event) => {
      let active = { ...this.props.active };
      const { option } = event;
      const value = ((option && option.hasOwnProperty('value')) ?
        option.value : option );
      active[property] = value;
      this.props.onChange(active);
    };
  }

  _toggle (property) {
    return (event) => {
      let active = { ...this.props.active };
      active[property] = ! active[property];
      this.props.onChange(active);
    };
  }

  render () {
    const { active, schema } = this.props;

    const fields = Object.keys(schema).map(property => {
      if (schema[property].options) {
        return (
          <FormField key={property} label={property}>
            <Select options={schema[property].options}
              value={active[property]}
              onChange={this._select(property)} />
          </FormField>
        );
      } else {
        return (
          <FormField key={property}>
            <CheckBox id={property} toggle={true} label={property}
              checked={active[property] ? true : false}
              onChange={this._toggle(property)} />
          </FormField>
        );
      }
    });

    return (
      <fieldset>
        {fields}
      </fieldset>
    );
  }
}

PropFields.propTypes = {
  active: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired
};

export default class InteractiveExample extends Component {

  constructor (props) {
    super(props);

    this._onChangeActiveProps = this._onChangeActiveProps.bind(this);
    this._onChangeActiveContents = this._onChangeActiveContents.bind(this);
    this._onChangeContextProps = this._onChangeContextProps.bind(this);
    this._updateLocation = this._updateLocation.bind(this);
    this._notify = this._notify.bind(this);

    const { contentsSchema, propsSchema } = props;

    let activeProps = {};
    if (propsSchema) {
      Object.keys(propsSchema)
      .filter(property => propsSchema[property].initial)
      .forEach(property => activeProps[property] = true);
    }

    let activeContents = {};
    if (contentsSchema) {
      Object.keys(contentsSchema)
      .filter(property => contentsSchema[property].initial)
      .forEach(property => activeContents[property] = true);
    }

    this.state = { activeContents, activeProps, contextProps: {} };
  }

  componentDidMount () {
    // read properties from location
    if (window.location.search) {
      // strip leading '?'
      const string = window.location.search.substr(1);
      // split properties
      const props = string.split('&');

      const activeContents = {};
      const activeProps = {};
      const contextProps = {};
      props.forEach(propString => {
        const [ name, encodedValue ] = propString.split('=');

        let value = decodeURIComponent(encodedValue);
        if ('true' === value) {
          value = true;
        } else if ('false' === value) {
          value = false;
        }

        const matchContext = name.match(CONTEXT_PROP_REGEXP);
        const matchContents = name.match(CONTENTS_PROP_REGEXP);
        if (matchContext) {
          const name = matchContext[1];
          contextProps[name] = value;
        } if (matchContents) {
          const name = matchContents[1];
          activeContents[name] = value;
        } else {
          activeProps[name] = value;
        }
      });

      this.setState({ activeContents, activeProps, contextProps },
        this._notify);
    } else {
      this._notify(); // to communicate default activeProps
    }
  }

  _updateLocation () {
    const { contextPath } = this.props;
    const { activeContents, activeProps, contextProps } = this.state;
    const { router } = this.context;
    let params = [];
    Object.keys(activeProps).filter(p => activeProps[p]).forEach(property => {
      params.push(
        `${property}=${encodeURIComponent(activeProps[property])}`);
    });
    Object.keys(activeContents).forEach(property => {
      params.push(
        `i-${property}=${encodeURIComponent(activeContents[property])}`);
    });
    Object.keys(contextProps).forEach(property => {
      params.push(
        `c-${property}=${encodeURIComponent(contextProps[property])}`);
    });
    const search = `?${params.join('&')}`;
    if (search !== window.location.search) {
      const path = `${contextPath}/examples${search}`;
      router.replace(path);
    }
  }

  _normalizeActiveForElement (active, schema) {
    let result = {};
    Object.keys(active)
    .filter(property => schema[property]) // in case user types incorrect URL
    .forEach(property => {
      if (schema[property].options ||
        typeof schema[property].value === 'boolean') {
        result[property] = active[property];
      } else if (active[property]) {
        result[property] = schema[property].value;
      }
    });
    return result;
  }

  _notify () {
    const { contentsSchema, onChange, propsSchema } = this.props;
    const { activeContents, activeProps } = this.state;
    let elementProps =
      this._normalizeActiveForElement(activeProps, propsSchema);
    let contents =
      this._normalizeActiveForElement(activeContents, contentsSchema);
    if (onChange) {
      onChange(elementProps, contents);
    }
  }

  _onChangeActiveProps (activeProps) {
    this.setState({ activeProps }, () => {
      this._updateLocation();
      this._notify();
    });
  }

  _onChangeActiveContents (activeContents) {
    this.setState({ activeContents }, () => {
      this._updateLocation();
      this._notify();
    });
  }

  _onChangeContextProps (contextProps) {
    this.setState({ contextProps }, this._updateLocation);
  }

  render () {
    const {
      align, codeElement, contentsSchema, contextLabel, contextPath,
      element, fields, justify, pad, preamble, propsSchema
    } = this.props;
    const {
      activeContents, activeProps, contextProps, responsive, showCode,
      showProperties
    } = this.state;

    const backControl = (
      <Anchor path={contextPath} primary={true} icon={<BackIcon />}
        label={contextLabel} />
    );

    let propFields;
    if (fields || propsSchema) {
      propFields = fields || (
        <PropFields schema={propsSchema} active={activeProps}
          onChange={this._onChangeActiveProps} />
      );
    }

    let contentsFields;
    if (contentsSchema) {
      contentsFields = (
        <PropFields schema={contentsSchema} active={activeContents}
          onChange={this._onChangeActiveContents} />
      );
    }

    let code;
    if (showCode) {
      code = (
        <Sidebar colorIndex='light-2' size='large'>
          <Header pad={{ horizontal: 'medium' }} justify='end'>
            {/*}
            <Button icon={<ClipboardIcon />} />
            {*/}
          </Header>
          <Box pad={{ horizontal: 'medium' }} flex='grow'>
            <Code preamble={preamble}>
              {codeElement || element}
            </Code>
          </Box>
        </Sidebar>
      );
    }

    let mobileHeader, sidebarControl, sidebarBackControl;
    if ('single' === responsive) {

      mobileHeader = (
        <Header pad={{ horizontal: 'medium' }} justify='between'>
          {backControl}
          <Button icon={<EditIcon />}
            onClick={() => this.setState({
              showProperties: !showProperties })} />
        </Header>
      );

      sidebarBackControl = <span />;

      sidebarControl = (
        <Button icon={<CloseIcon />}
          onClick={() => this.setState({ showProperties: false })} />
      );

    } else {

      sidebarBackControl = backControl;
      sidebarControl = (
        <Button icon={<CodeIcon />}
          onClick={() => this.setState({ showCode: !showCode })} />
      );
    }

    return (
      <Split flex='right' priority={showProperties ? 'left' : 'right'}
        onResponsive={(responsive) => this.setState({ responsive })}>

        <Sidebar colorIndex='light-2'>
          <Header pad={{ horizontal: 'medium' }} justify='between'>
            {sidebarBackControl}
            {sidebarControl}
          </Header>
          <Form pad={{ horizontal: 'medium' }}>
            {propFields}
            {contentsFields}
            <ContextFields {...contextProps}
              onChange={this._onChangeContextProps} />
          </Form>
          {/* Added so Select drop downs above have somewhere to expand to */}
          <Box pad={{ vertical: 'xlarge' }} />
        </Sidebar>

        <Split flex='left' priority='left'>

          <Article full='vertical'>
            {mobileHeader}
            <Context {...contextProps} justify={justify} align={align}
              pad={pad}>
              {element}
            </Context>
          </Article>

          {code}

        </Split>

      </Split>
    );
  }
};

InteractiveExample.propTypes = {
  align: PropTypes.string,
  codeElement: PropTypes.element, // for Layer
  contentsSchema: PropTypes.object,
  contextLabel: PropTypes.string.isRequired,
  contextPath: PropTypes.string.isRequired,
  element: PropTypes.element.isRequired,
  fields: PropTypes.element, // for BoxingGym
  justify: PropTypes.string,
  onChange: PropTypes.func,
  pad: PropTypes.string, // for Split
  preamble: PropTypes.string,
  propsSchema: PropTypes.object
};

InteractiveExample.contextTypes = {
  router: PropTypes.any
};
