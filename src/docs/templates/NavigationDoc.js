// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';

export default class NavigationDoc extends Component {

  render () {
    return (
      <DocsArticle title='Navigation'>
        <Section pad={{between: 'large'}}>
          <Paragraph size='large'>
            Grommet follows a mobile-first design approach for its main
            navigation. To respond down to smaller device sizes, our header
            consists of only the essential elements of an application. We’ve
            instituded a Hub & Spoke design aesthetic to keep the elements
            minimal and promote a contextual navigation experience.
          </Paragraph>
          <Box className='call-out' pad={{horizontal: 'medium'}}
            colorIndex='light-2'>
            <blockquote>
              <strong>Hub & Spoke</strong> is useful for multiple, distinct
              linear workflows. Building task based experiences stemming from
              a common start point helps ensure the items within an app
              correlate for a cohesive experience.
            </blockquote>
          </Box>
        </Section>
        <Section separator='bottom'>
          <Paragraph size='large'>
            <strong>The Header</strong> is designed to be easily accessible
              while supporting the main content of your application.
          </Paragraph>
          <Box direction='row' pad={{between: 'large'}}>
            <Box pad={{vertical: 'small'}}>
              <Image src='/img/TheHeader.svg' alt='navigation header'
                size='small' />
            </Box>
            <Box className='flex'>
              <Paragraph margin='small'>
                When designing your application, the header should only provide
                the essential elements of the navigation. The header 
                composition is formed by a combination of the 
                <em>Application Icon</em>, <em>Application Name</em>, and 
                when available, the <em>User Functional 
                Icon</em>, and/or <em>Search Field Icon</em>.
              </Paragraph>
              <Paragraph margin='small'>
                If your application requires the exposure of other navigational
                elements or unique application functions, those should be
                reserved for the main navigation’s sidebar.
              </Paragraph>
              <Anchor path='/docs/header' primary={true}>
                Header Component
              </Anchor>
            </Box>
          </Box>
        </Section>

        <Section separator='bottom'>
          <Paragraph size='large'>
            <strong>The Sidebar</strong>. When designing your 
              {'application\'s'} 
              main navigation, your sidebar is your friend. All key application
              areas should be accessible through your sidebar.
          </Paragraph>
          <Box direction='row' pad={{between: 'large'}}>
            <Box pad={{vertical: 'small'}}>
              <Image src='/img/TheSidebar.svg' alt='navigation sidebar'
                size='small' />
            </Box>
            <Box>
              <Paragraph margin='small'>
              As opposed to using the <em>Application Icon</em> as a link to the
              application main page, Grommet uses the icon as a mechanism to
              toggle the sidebar for access to all areas of the application.
              </Paragraph>
              <Paragraph margin='small'>
                The sidebar should be accessible at all times. For more simple
                applications, the sidebar might not even be needed.
              </Paragraph>
              <Anchor path='/docs/sidebar' primary={true}>
                Sidebar Component
              </Anchor>
            </Box>
          </Box>
        </Section>

        <Section separator='bottom'>
          <Paragraph size='large'>
            <strong>Action Dropdown Menu</strong>. In some cases, the 
              application
              menu items will necessitate a need for secondary actions. When
              these cases are presented, the dropdown component can be used in
              conjunction with a functional icon.
          </Paragraph>
          <Box direction='row' pad={{between: 'large'}}>
            <Box pad={{vertical: 'small'}}>
              <Image src='/img/ActionDropdownMenu.svg'
                alt='navigation action dropdown menu' size='small' />
            </Box>
            <Box>
              <Paragraph margin='small'>
                It’s important to maintain a short list of actions that are
                relevant to the function of the icon. The dropdown menu
                component only supports a <strong>single level of
                structure</strong>. If you are trying to expose more granular
                actions within a menu or sub-sections, these actions should be
                moved outside of the dropdown menu or into a separate display
                mechanism in your application.
              </Paragraph>
              <Paragraph margin='small'>
                In responsive views, it’s important to note that the dropdown
                menu does not occupy the entire screen.
              </Paragraph>
              <Anchor path='/docs/menu' primary={true}>
                Menu Component
              </Anchor>
            </Box>
          </Box>
        </Section>

        <Section separator='bottom'>
          <Paragraph size='large'>
            <strong>Responsive Behavior</strong>. Much like all components in
              Grommet, the navigation automagically responds to display as 
              much
              context as possible for users at different browser sizes and
              devices.
          </Paragraph>
          <Box direction='row' pad={{between: 'large'}}>
            <Box pad={{vertical: 'small'}}>
              <Image src='/img/ResponsiveBehavior.svg'
                alt='navigation responsive behavior' size='small' />
            </Box>
            <Box>
              <Paragraph margin='small'>
                A great example of this behavior is how Grommet will display the
                sidebar when there is enough space horizontally in the view, but
                will collapse it for mobile experiences.
              </Paragraph>
              <Paragraph margin='small'>
                These types of behaviors are built into each component so
                designers and developers alike can focus on their content and
                the experience, rather than the styling and structure of the
                componentry.
              </Paragraph>
              <Anchor path='/docs/resources' primary={true}>
                Design Resources
              </Anchor>
            </Box>
          </Box>
        </Section>

        <Box pad={{vertical: 'medium'}}>
          <Box className='call-out' pad='medium' colorIndex='light-2'>
            <Heading tag='h2' strong={true}>Showcase</Heading>
            <Heading tag='h6'>Header Demo</Heading>
            <Anchor href='http://ferret.grommet.io/'>
              <Heading tag='h3' margin='none'>
                <strong>Ferret Enterprise Application</strong>
              </Heading>
            </Anchor>
          </Box>
        </Box>
      </DocsArticle>
    );
  }
};
