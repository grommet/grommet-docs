import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';

export default class SectionDoc extends Component {

  render () {
    return (
      <DocsArticle title="Section" colorIndex="neutral-3">

        <p>Responsively grouping related contents inside a page.</p>

        <section>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
            available.</p>
        </section>

        <section>
          <Example name="Example" code={
            <Section>
              <Header align="center" justify="between">
                <h3>Sample Content</h3>
                <Menu direction="row">
                  <Anchor href="">Link 1</Anchor>
                  <Anchor href="">Link 2</Anchor>
                </Menu>
              </Header>
              <Paragraph>Lorem ipsum ...</Paragraph>
            </Section>
          } />
        </section>

      </DocsArticle>
    );
  }
};
