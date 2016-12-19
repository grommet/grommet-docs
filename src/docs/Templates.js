// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import LinkDownIcon from 'grommet/components/icons/base/LinkDown';
import DocsArticle from '../components/DocsArticle';

const TEMPLATES = [
  {
    title: 'Primary Page',
    desc: `A bold presentation that uses a large Marquee to 
      capture the attention of users.`,
    path: '/docs/primary-page',
    wireframe: (
      <Box separator="all" responsive={false}
        size={{height: {min: 'small'}, width: {min: 'small'}}}>
        <Box colorIndex="grey-5" pad="small" />
        <Box pad="medium" separator="bottom" flex="grow" />
        <Box colorIndex="light-2" flex="grow"
          pad={{ horizontal: 'small', vertical: 'small',
            between: 'small' }}>
          <Box colorIndex="light-1" pad="medium" separator="all" 
            flex="grow" />
          <Box direction="row" pad={{ between: 'small' }}
            responsive={false} flex="grow">
            <Box colorIndex="light-1" basis="1/3" separator="all" 
              pad={{vertical: 'small'}}/>
            <Box colorIndex="light-1" basis="1/3" separator="all" 
              pad={{vertical: 'small'}}/>
            <Box colorIndex="light-1" basis="1/3" separator="all" 
              pad={{vertical: 'small'}}/>
          </Box>
        </Box>
      </Box>
    )
  },{
    title: 'Sub Page',
    desc: `Useful when structuring an interior navigation hub 
      for a project.`,
    path: '/docs/sub-page',
    wireframe: (
      <Box separator="all" responsive={false}
        size={{height: {min: 'small'}, width: {min: 'small'}}}>
        <Box colorIndex="grey-5" pad="small" />
        <Box colorIndex="light-2" flex="grow"
          pad={{ horizontal: 'small', vertical: 'small',
            between: 'small' }}>
          <Box colorIndex="light-1" pad="large" separator="all" 
            flex="grow" />
          <Box direction="row" pad={{ between: 'small' }}
            responsive={false} flex="grow">
            <Box colorIndex="light-1" basis="1/2" separator="all" 
              pad={{vertical: 'small'}}/>
            <Box colorIndex="light-1" basis="1/2" separator="all" 
              pad={{vertical: 'small'}}/>
          </Box>
        </Box>
      </Box>
    )
  },{
    title: 'Detail Page',
    desc: `Highlight feature content in the interior of your project.`,
    path: '/docs/detail-page',
    wireframe: (
      <Box separator="all" responsive={false}
        size={{ height: {min: 'small'}, width: {min: 'small'} }}>
        <Box colorIndex="grey-5" pad="small" />
        <Box colorIndex="light-2" flex="grow"
          pad={{ horizontal: 'small', vertical: 'small',
            between: 'small' }}>
          <Box direction="row" pad={{ between: 'small' }}
            responsive={false} flex="grow">
            <Box colorIndex="light-1" basis="2/3" separator="all" 
              pad={{vertical: 'small'}}/>
            <Box colorIndex="light-1" basis="1/3" separator="all" 
              pad={{vertical: 'small'}}/>
          </Box>
          <Box colorIndex="light-1" pad="medium" separator="all" 
            flex="grow" />
          <Box direction="row" pad={{ between: 'small' }}
            responsive={false} flex="grow">
            <Box colorIndex="light-1" basis="1/3" separator="all" 
              pad={{vertical: 'small'}}/>
            <Box colorIndex="light-1" basis="1/3" separator="all" 
              pad={{vertical: 'small'}}/>
            <Box colorIndex="light-1" basis="1/3" separator="all" 
              pad={{vertical: 'small'}}/>
          </Box>
        </Box>
      </Box>
    )
  },{
    title: 'Vertical Narrative',
    desc: `A slideshow presentation with horizontal transitions, 
      best for storytelling.`,
    path: '/docs/vertical-narrative',
    wireframe: (
      <Box separator="all" responsive={false}
        size={{height: {min: 'small'}, width: {min: 'small'}}}>
        <Box colorIndex="grey-5" pad="small" />
        <Box colorIndex="light-2" pad="small" flex="grow">
          <Box colorIndex="light-1" pad="small" separator="all" 
          align="center" justify="end"flex="grow">
            <LinkDownIcon size="small" />
          </Box>
        </Box>
      </Box>
    )
  },{
    title: 'Infographic',
    desc: `Display data or illustration views
      specifically for visual storytelling.`,
    path: '/docs/infographic',
    wireframe: (
      <Box separator="all" responsive={false}
        size={{height: {min: 'small'}, width: {min: 'small'}}}>
        <Box colorIndex="grey-5" pad="small" />
        <Box flex="grow" 
          pad={{ horizontal: 'medium', between: 'small', vertical: 'medium' }}>
          <Box direction="row" flex="grow" pad={{ between: 'small' }}  
            responsive={false}>
            <Box colorIndex="light-2" flex="grow" pad="small" />
            <Box colorIndex="light-2" flex="grow" pad="small" />
          </Box>
          <Box direction="row" flex="grow" pad={{ between: 'small' }}  
            responsive={false}>
            <Box colorIndex="light-2" flex="grow" pad="small" />
            <Box colorIndex="light-2" flex="grow" pad="small" />
          </Box>
        </Box>
      </Box>
    )
  }
];

const TemplateTile = ({desc, title, path, wireframe}) => 
  <Box size={{ width:  'small' }}>
    <Button path={path}>
      {wireframe}
    </Button>
    <Box pad={{vertical: 'small'}}>
      <Anchor label={title} path={path} />
      <Paragraph margin="small">
        {desc}
      </Paragraph>
    </Box>
    <Box pad="small" />
  </Box>;

export default class Templates extends Component {

  render () {
    const templates = TEMPLATES.map(({desc, title, path, wireframe}, index) => 
      <TemplateTile 
        title={title} path={path} wireframe={wireframe} desc={desc}
        key={`template-${index}`}/>);

    return (
      <DocsArticle title="Templates">
        <Paragraph>
          Grommet Templates provides developers and designers with 
          a set of boilerplate layouts for common use cases that 
          fit many of our experiences and we hope yours as well. 
          All Grommet Templates can be themed, have the same 
          great responsive design as our components, and 
          can be customized to suit your design needs.
        </Paragraph>
        <Section size={{width: {max: 'xxlarge'}}}>
          <Box full="horizontal" wrap={true} direction="row" 
            pad={{between: 'large'}}>
            {templates}
          </Box>
        </Section>
      </DocsArticle>
    );
  }
};
