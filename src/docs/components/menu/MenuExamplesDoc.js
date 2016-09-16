// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import ActionsIcon from 'grommet/components/icons/base/Actions';
import FilterIcon from 'grommet/components/icons/base/Filter';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const ANCHORS = [
  <Anchor key={1} href="#" className="active">First action</Anchor>,
  <Anchor key={2} href="#">Second action</Anchor>,
  <Anchor key={3} href="#">Third action</Anchor>
];

const CHECK_BOXES = [
  <CheckBox key={1} id="check-1" label="first" />,
  <CheckBox key={2} id="check-2" label="second" />,
  <CheckBox key={3} id="check-3" label="third" />
];

const BUTTONS = [
  <Button key={1} label="first" onClick={() => alert('first')} />,
  <Button key={2} label="second" onClick={() => alert('second')} />,
  <Button key={3} label="third" onClick={() => alert('third')} />
];

const MenuExample = (props) => (
  <Example code={
    <Menu {...props} />
  } />
);

export default class MenuExamplesDoc extends ExamplesDoc {};

MenuExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/menu">Menu</NavAnchor>,
  examples: [
    { label: 'Inline, Column', component: MenuExample,
      props: { children: ANCHORS, inline: true }
    },
    { label: 'Inline, Row', component: MenuExample,
      props: { children: ANCHORS, inline: true, direction: 'row' }
    },
    { label: 'Inline, Row, End', component: MenuExample,
      props: { children: ANCHORS, inline: true, direction: 'row',
        justify: 'end', label: 'Label' }
    },
    { label: 'Drop, Label', component: MenuExample,
      props: { children: ANCHORS, label: 'Label' }
    },
    { label: 'Drop, Default icon', component: MenuExample,
      props: { children: ANCHORS, inline: false }
    },
    { label: 'Drop, Custom icon', component: MenuExample,
      props: { children: ANCHORS, icon: <ActionsIcon /> }
    },
    { label: 'Drop, Custom icon, Label', component: MenuExample,
      props: { children: ANCHORS, icon: <ActionsIcon />, label: 'Actions' }
    },
    { label: 'Drop, do not close on click', component: MenuExample,
      props: { children: CHECK_BOXES, icon: <FilterIcon />,
        pad: 'medium', closeOnClick: false }
    },
    { label: 'Drop, Up', component: MenuExample,
      props: { children: ANCHORS, inline: false,
        dropAlign: { bottom: 'bottom' } }
    },
    { label: 'Button Bar', component: MenuExample,
      props: { children: BUTTONS, inline: true, direction: 'row' }
    },
    { label: 'Small', component: MenuExample,
      props: { children: ANCHORS, inline: true, direction: 'row',
        size: 'small' }
    },
    { label: 'Large', component: MenuExample,
      props: { children: ANCHORS, inline: true, direction: 'row',
        size: 'large' }
    }
  ],
  title: 'Examples'
};
