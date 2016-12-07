// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';

export default class WritingStyle extends Component {

  render () {
    return (
      <DocsArticle title="Writing Style">
        <section>
          <p>Applications should use a conversational tone and should
            not include
          excessive technical jargon.</p>

          <p>Here are some things we recommend you consider when writing for
            applications:</p>

          <h2>Dos</h2>
          <ul>
            <li>Use simple, yet complete sentences.</li>
            <li>Use correct punctuation.</li>
            <li>Use the present tense to describe problem states.</li>
            <li>Use past tense to describe events that occurred in the
              past.</li>
            <li>Use an active voice whenever possible.</li>
            <li>Passive voice is acceptable to describe some error
              conditions.</li>
            <li>Use descriptors to clarify terminology. For example,
              “Specify InflD
            when Detect is set to NO.” We instead recommend something along the
            lines of “Specify the InflD parameter when the Detect option is set
            to NO”.</li>
          </ul>

          <h2>Don’ts</h2>
          <ul>
            <li>Do not use UPPERCASE in text or exclamation points!!!!</li>
            <li>Do not make the user feel at fault.</li>
            <li>Do not anthropomorphize by implying that the programs or
              hardware
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
        </section>
      </DocsArticle>
    );
  }
};
