// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import CheckBox from 'grommet/components/CheckBox';
import RadioButton from 'grommet/components/RadioButton';
import NumberInput from 'grommet/components/NumberInput';
import SearchInput from 'grommet/components/SearchInput';
import DateTime from 'grommet/components/DateTime';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const FormFieldExample = (props) => (
  <Example code={
    <Form>
      <FormField {...props} />
    </Form>
  } />
);

export default class FormFieldExamplesDoc extends ExamplesDoc {};

FormFieldExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/form-field">FormField</NavAnchor>,
  examples: [
    { label: 'Text input', component: FormFieldExample,
      props: { label: 'Item 1', htmlFor: 'item1',
        children: <input id="item1" type="text" /> }
    },
    { label: 'Text input with error', component: FormFieldExample,
      props: { label: 'Item 1', htmlFor: 'item1', error: 'error text',
        children: <input id="item1" type="text" /> }
    },
    { label: 'Checkbox', component: FormFieldExample,
      props: { children: <CheckBox id="item2" label="Item 2" /> }
    },
    { label: 'RadioButton with help', component: FormFieldExample,
      props: { label: 'Item 1', htmlFor: 'item1', help: 'help text',
        children: [
          <RadioButton key="1" id="item1-1" label="choice 1" name="choice"/>,
          <RadioButton key="2" id="item1-2" label="choice 2" name="choice"/>
        ] }
    },
    { label: 'Range', component: FormFieldExample,
      props: { label: 'Item 1', htmlFor: 'item1',
        children: <input id="item1" type="range" min="0" max="80"
          defaultValue="40" /> }
    },
    { label: 'NumberInput', component: FormFieldExample,
      props: { label: 'Item 1', htmlFor: 'item1',
        children: <NumberInput id="item1" name="number" /> }
    },
    { label: 'SearchInput', component: FormFieldExample,
      props: { label: 'Item 1', htmlFor: 'item1',
        children: <SearchInput id="item1"
          defaultValue={"This is a really long search value " +
            "that keeps going and going. Wow it is really long!"} /> }
    },
    { label: 'DateTime', component: FormFieldExample,
      props: { label: 'Item 1', htmlFor: 'item1',
        children: <DateTime id="item7" onChange={() => alert('TBD')}
          value="9/21/2016 11:00 am" /> }
    }
  ],
  title: 'Examples'
};
