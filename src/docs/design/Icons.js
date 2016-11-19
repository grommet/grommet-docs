// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import DocsArticle from '../../components/DocsArticle';

var CONTROL_ICONS = [
  {component: require('grommet/components/icons/base/Add'), labels: ['Add']},
  {component: require('grommet/components/icons/base/Close'),
    labels: ['Clear', 'Close', 'Remove']},
  {component: require('grommet/components/icons/base/Edit'),
    labels: ['Edit', 'Settings', 'Actions']},
  {component: require('grommet/components/icons/base/More'),
    labels: ['More']},
  {component: require('grommet/components/icons/base/Drag'),
    labels: ['Drag handle']},
  {component: require('grommet/components/icons/base/Down'),
    labels: ['Drop caret']},
  {component: require('grommet/components/icons/base/Filter'),
    labels: ['Filter']},
  {component: require('grommet/components/icons/base/Search'),
    labels: ['Search']},
  {component: require('grommet/components/icons/base/Calendar'),
    labels: ['Calendar']},
  {component: require('grommet/components/icons/base/Help'),
    labels: ['Help']},
  {component: require('grommet/components/icons/base/LinkPrevious'),
    labels: ['Left', 'Previous']},
  {component: require('grommet/components/icons/base/LinkNext'),
    labels: ['Right', 'Next']},
  {component: require('grommet/components/icons/base/LinkUp'),
    labels: ['Up']},
  {component: require('grommet/components/icons/base/LinkTop'),
    labels: ['Top']},
  {component: require('grommet/components/icons/base/User'),
    labels: ['User']},
  {component: require('grommet/components/icons/base/Language'),
    labels: ['Language']},
  {component: require('grommet/components/icons/base/Mail'),
    labels: ['Mail']},
  {component: require('grommet/components/icons/base/SocialTwitter'),
    labels: ['Twitter']},
  {component: require('grommet/components/icons/base/SocialLinkedin'),
    labels: ['LinkedIn']},
  {component: require('grommet/components/icons/base/SocialFacebook'),
    labels: ['Facebook']}
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

export default class Icons extends Component {

  render () {

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
          {React.createFactory(item.component)({
            value: item.value, size: 'large'})}
          {React.createFactory(item.component)({
            value: item.value})}
          {React.createFactory(item.component)({
            value: item.value, size: 'small'})}
          <label>{labels}</label>
        </div>
      );
    });

    return (
      <DocsArticle title="Icons">
        <Box>
          <p>Icons are used for inline controls. Users should be able to
            identify
            an icon’s function without any supporting text decoration.
            This is why
            we have a fairly small icon set. Text is used for
            non-iconifiable controls.</p>

          <h3>Controls</h3>
          <p>Control icons have a larger hit area around them to work well
            on mobile platforms.</p>
          <div className="example">
            {controlIcons}
          </div>

          <h3>Status</h3>
          <p>Status icons come in multiple sizes for use in different contexts.
            They are differentiated both by color and by shape for
            accessibility.
            Typically, status icons are placed immediately to the left of
            the label
            indicating what object they are indicating the status of.</p>
          <div className="example">
            {statusIcons}
          </div>
          <p>When something is occuring that could lead to a change in
            status, a changing
            icon is added next to the status icon. This changing icon is
            placed to the
            right of the status icon when laying out horizontally, and
            below when laying
            out vertically.</p>
          <div className="example">
            <div className="icon-tile">
              <div><Spinning /></div>
              <div><Spinning small="small" /></div>
              <label>
                <span>Changing</span>
                <span>Loading</span>
              </label>
            </div>
          </div>
        </Box>
      </DocsArticle>
    );
  }
};
