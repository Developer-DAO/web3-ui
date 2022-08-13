import { Card } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Card',
};
