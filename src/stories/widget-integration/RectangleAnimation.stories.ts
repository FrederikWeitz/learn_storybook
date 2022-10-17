import { Story, Meta } from '@storybook/angular/types-6-0';
import RectangleAnimation from './rectangle-animation.component';

export default {
  title: 'SVG/Rectangle',
  component: RectangleAnimation,
} as Meta;

const Template: Story<RectangleAnimation> = (args: RectangleAnimation) => ({
  props: args,
});

export const SmallMovingGreen = Template.bind({});
SmallMovingGreen.args = {
  size: 20,
  animated: true
}

export const BigMovingGreen = Template.bind({});
BigMovingGreen.args = {
  size: 150,
  animated: true,
  hover: true
}

export const SmallMovingRed = Template.bind({});
SmallMovingRed.args = {
  ...SmallMovingGreen.args,
  fill: 'red',
  withCenter: false
}

export const SmallMovingBlue = Template.bind({});
SmallMovingBlue.args = {
  ...SmallMovingGreen.args,
  fill: 'blue',
  withCenter: false
}

export const BigMovingBlue = Template.bind({});
BigMovingBlue.args = {
  size: 150,
  animated: true,
  fill: 'blue'
}
