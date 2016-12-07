// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';

export default class Capitalization extends Component {

  render () {
    return (
      <DocsArticle title="Capitalization">
        <section>
          <p>For the English language, we recommend using English capitalization
          rules for titles (i.e. generally, capitalize the first letter of
            each word). Titles
          include the following user interface elements:</p>
          <ul>
            <li>Page titles</li>
            <li>Panel titles</li>
            <li>Section headings</li>
            <li>Form section titles</li>
            <li>Table headers</li>
            <li>Dialog titles (reference rule #8: grammarbook.com)</li>
          </ul>

          <h2>Sentence Capitalization</h2>
          <p>Capitalize only the first letter of data labels unless a word
            used in the
          data label otherwise deserves capitalization because of English
          capitalization
          rules (i.e. proper names, abbreviations, etc).</p>

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

          <h2>Attributes</h2>
          <p>Capitalize only the first letter of attributes unless a word
            used in
          the attribute otherwise deserves capitalization because of English
          capitalization rules (i.e. proper names, abbreviations, etc).
          User-entered
          attributes will retain the user’s capitalization.</p>

          <h3>Exceptions</h3>
          <p>The English language is full of exceptions, so we felt compelled.
          For attribute values which indicate the property or data field that
          hasn’t
          been set or the location is intentionally left empty, we use the
          non-capitalized words or phrases such as “empty”, “none”, “not set”,
          “unassigned”, or “no alerts”.</p>

          <p>Some specific words and acronyms are always capitalized for
            branding
          or common industry recognition.</p>

          <h4>Examples</h4>
          <ul>
            <li>VLAN</li>
            <li>IPv4</li>
            <li>IPv6</li>
            <li>WWN</li>
          </ul>

          <h2>Capitalization in APIs</h2>
          <p>Yes, our application users make use of our APIs, so it’s important
          to provide a familiar voice to our users, regardless of the interface
          they are using.</p>

          <h3>PascalCase</h3>
          <ul>
            <li>Schema names</li>
            <li>Schema enum values</li>
          </ul>

          <h3>camelCase</h3>
          <p>The following API elements should be rendered in camelCase:</p>
          <ul>
            <li>Schema attribute names</li>
          </ul>
        </section>
      </DocsArticle>
    );
  }
};
