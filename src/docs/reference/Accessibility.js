// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';
import App from 'grommet/components/App';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import SkipLinkAnchor from 'grommet/components/SkipLinkAnchor';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Status from 'grommet/components/icons/Status';

export default class Accessibility extends Component {

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title='Accessibility'>

        <section>
          <p>Products that are accessible to all users are good for people,
          products, and business. All users should be empowered with access
          and the ability to have a pleasant experience.</p>

          <p>Grommet follows the <Anchor href='http://www.w3.org/TR/WCAG20/' 
             target="blank"> Web Content Accessibility Guidelines (WCAG)
             </Anchor>.  By following this style guide
          and utilizing Grommet, you will be
          well on your way to satisfying the WCAG recommendations.
          </p>

          <p>
            Grommet will add the basic accessibility support automatically.
            For example, all our graphics are accessible and keyboard operable.
            The following sections will describe additional features that will
            allow your application to be even more accessible.
          </p>
        </section>

        <section>
          <Heading tag='h2'>Custom title</Heading>
          <p>Grommet components can be read
            by <Anchor
              href="https://www.afb.org/ProdBrowseCatResults.asp?CatID=49">
              screen readers
            </Anchor>. The default
            textual description varies for each component.
            In general, this description is generic and lacks contextual
            information that help users to understand the surrounding data.
            Most Grommet components support a property called <b>
              a11yTitle
            </b> that enables callers to provide a
            better description.
            </p>
          <Box>
            <Heading tag='h4'>Example:</Heading>
            <p>Using <b>a11yTitle</b> for icons to explain their purpose.</p>

            <Box direction='row' align='center' pad={{ between: 'small' }}>
              <Status a11yTitle='Server Down' value='critical'/>
              <Code>
                <Status a11yTitle='Server Down' value='critical'/>
              </Code>
            </Box>
          </Box>

          <p>
            For this example, will read "Server Down, Image" instead of
            "Critical, Image".
          </p>
        </section>

        <section>
          <Heading tag='h2'>Language support</Heading>
          <p>
            If the lang attribute is not explicitly set in the html
            element, Grommet will specify the lang attribute according to
            the user browser’s locale. In addition to the html element,
            lang attribute can be set on other elements like App.
          </p>
          <h4>Example</h4>
          <Code>
            <App lang='en-US'>Testing</App>
          </Code>
        </section>

        <section>
          <Heading tag='h2'>Skip Links</Heading>
          <p>Grommet has skip links that make it easy to skip repetitive
            content.
            By default, Grommet skip links have two locations: Skip to Main
            Content and Skip to Footer.
            To set the "Skip to Main Content"
            link in Grommet, an attribute <b>primary="true"</b> needs to be
            added to a <Anchor path='/docs/box'>Box</Anchor> element.
            The "Skip to Footer" link works in a similar way by
            adding <b>primary="true"</b> to a <Anchor path='/docs/footer'>
              Footer
            </Anchor> component. Custom skip links are possible by creating
            an instance of a <b>SkipLinkAnchor</b>.
            </p>
          <p>Skip links will be automatically presented when pressing tab in a
            given page.</p>
          <h4>Example:</h4>
          <Code>
            <App>
              <Box primary={true}>Main Content</Box>
              <Box>
                <SkipLinkAnchor label='Custom' />
                Custom skip link
              </Box>
              <Footer primary={true}>Application Footer</Footer>
            </App>
          </Code>
        </section>
      </DocsArticle>
    );
  }
};
