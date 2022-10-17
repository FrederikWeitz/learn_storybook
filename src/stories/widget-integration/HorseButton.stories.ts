import { Story, Meta } from '@storybook/angular/types-6-0';
import HorseButton from './horse-button.component';

export default {
  title: 'SVG/HorseButton',
  component: HorseButton,
  argTypes: {
    hoverCurl: {control: 'boolean'},
  }
} as Meta;

const Template: Story<HorseButton> = (args: HorseButton) => ({
  props: args,
});

export const NormalHorseButton = Template.bind({});
NormalHorseButton.args = {}

export const BlueHorseButton = Template.bind({});
BlueHorseButton.args = {
  hoverCurl: true,
}
