// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';

export default class BestPractices extends Component {

  render () {
    return (
      <DocsArticle title="Best Practices">
        <section>
          <dl>
            <dt>Know your users</dt>
            <dd>It is critically important that you know your users.  Get to
            know some of them
            on a personal level such that you are able to generalize their
            behavior and the
            rational for their work practices and decisions.</dd>

            <dt>Your users are not like you</dt>
            <dd>You are likely an advanced user of your application and are
            aware of every detail of the application.  That can lead to elevated
            expectations of your users.</dd>

            <dt>All users are not the same</dt>
            <dd>Different users have different backgrounds and goals.  Each
            user has a
            set of previous experiences that influence their expectations of
            your
            application.</dd>

            <dt>Let the user take control</dt>
            <dd>Provide ways for users to work with purpose
            and efficiency by eliminating their pain points and allow them
            to craft their experience.</dd>

            <dt>Content over chrome</dt>
            <dd>You can have a gorgeous interface but if your content is hidden
            or the interactions are clumsy, you are missing the point. Focus on
            the things that will deliver the greatest value to your user.</dd>

            <dt>Don’t drown the user in data</dt>
            <dd>Carefully choose what you present to your users. If there is
            too much information available, they may miss the relevant
            details.</dd>

            <dt>Innovate with intention</dt>
            <dd>Let your innovation shine through, but remember that your 
            product will be used by users who are using other products in 
            a portfolio of
            applications.  You do not want your application to feel or behave
            differently in the core areas of navigation and interaction.</dd>

            <dt>Consistency across the application</dt>
            <dd>Use common elements described in the Grommet style guide 
            throughout your
            application. Users prefer repetition and are comfortable with
            familiar patterns.</dd>

            <dt>Tell a story and use metaphors</dt>
            <dd>Stories are irresistible to humans. Telling a story will
            help users connect with your product.  Metaphors help users quickly
            establish a mental model of your product.</dd>

            <dt>There are no user errors</dt>
            <dd>Humans are error prone.  It is our job to design interfaces that
            expect human error and handle it robustly.  You should prevent
            errors
            wherever possible and clearly inform users of the consequences of a
            pending operation.  Use a friendly voice for system errors and take
            accountability for the interruption.</dd>

            <dt>Think about the entire user experience</dt>
            <dd>Understand how your customers will interact with your product.
            Talk with different users to understand all the touch points.
            Consider creating a user journey for each persona. Share this
            deliverable with your team to leverage the impact of each
            person’s role in the project, increasing individual ownership
            and commitment.</dd>
          </dl>
        </section>
      </DocsArticle>
    );
  }
};
