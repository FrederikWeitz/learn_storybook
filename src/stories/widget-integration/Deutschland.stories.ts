import { Story, Meta } from '@storybook/angular/types-6-0';
import DeutschlandComponent from './deutschland.component';

export default {
  title: 'SVG/Deutschland',
  component: DeutschlandComponent,
} as Meta;

const Template: Story<DeutschlandComponent> = (args: DeutschlandComponent) => ({
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {}
