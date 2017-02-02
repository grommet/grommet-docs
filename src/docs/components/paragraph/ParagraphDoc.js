// (C) Copyright 2015-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

const TEXT = `Raised on hip-hop and foster care, defiant city kid Ricky
gets a fresh start in the New Zealand countryside. He quickly finds himself
at home with his new foster family: the loving Aunt Bella, the cantankerous
Uncle Hec, and dog Tupac. When a tragedy strikes that threatens to ship
Ricky to another home, both he and Hec go on the run in the bush. As a
national manhunt ensues, the newly branded outlaws must face their
options: go out in a blaze of glory or overcome their differences and
survive as a family.`;

export default class ParagraphDoc extends Component {

  render () {
    return (
      <DocsArticle title='Paragraph' action={
        <Button primary={true} path={`/docs/paragraph/examples`}
          label='Examples' />
        }>

        <section>
          <p>A paragraph of text, such as ...</p>
          <Paragraph>
            {TEXT}
          </Paragraph>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align      start|center|end</code></dt>
            <dd>Text alignment. Defaults to inherit.</dd>
            <dt><code>margin     none|small|medium|large</code></dt>
            <dd>Vertical margin.</dd>
            <dt><code>size       small|medium|large|xlarge</code></dt>
            <dd>The size of the Paragraph text.
              Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
