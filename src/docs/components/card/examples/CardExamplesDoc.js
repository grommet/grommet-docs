// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import ExamplesDoc from '../../../../components/ExamplesDoc';

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import Card7 from './Card7';

export default class CardExamplesDoc extends ExamplesDoc {};

CardExamplesDoc.defaultProps = {
  examples: [
    { label: 'Default', component: Card1 },
    { label: 'Reverse, Link', component: Card2 },
    { label: 'Row, Video', component: Card3 },
    { label: 'Custom Children, with and without Social Icons (Tiles)',
      component: Card4 },
    { label: 'Link, Video, Simple, Simple (Tiles)', component: Card5 },
    { label: 'Columns (with Masonry, MaxCount 7, and Responsive)',
      component: Card6 },
    { label: 'Stack', component: Card7 }
  ],
  title: 'Card Examples'
};
