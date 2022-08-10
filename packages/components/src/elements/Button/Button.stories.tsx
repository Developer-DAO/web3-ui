import { Button } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
