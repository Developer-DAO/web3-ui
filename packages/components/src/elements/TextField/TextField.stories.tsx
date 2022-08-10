import { TextField } from './TextField';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
};
