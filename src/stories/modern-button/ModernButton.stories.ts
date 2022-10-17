// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './modern-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Modern/Button',
  component: Button,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  functionType: 'primary',
  label: 'Button',
  imagePath: '/assets/repo.svg',
  imageAlign: 'left'
};

export const Success = Template.bind({});
Success.args = {
  functionType: 'success',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  functionType: 'danger',
  label: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  functionType: 'warning',
  label: 'Button',
};

export const Info = Template.bind({});
Info.args = {
  functionType: 'info',
  label: 'Button',
};

export const Light = Template.bind({});
Light.args = {
  functionType: 'light',
  label: 'Button',
};

export const DarkFilled = Template.bind({});
DarkFilled.args = {
  isFilled: true,
  functionType: 'dark',
  label: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  isFilled: false,
  functionType: 'dark',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  fontSize: 'large',
};

export const Small = Template.bind({});
Small.args = {
  fontSize: 'small',
};

export const Round = Template.bind({});
Round.args = {
  functionType: 'danger',
  fontSize: 'small',
  roundedCorners: true,
}
