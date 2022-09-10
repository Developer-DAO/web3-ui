import { Card } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Card',
  component: Card,
  argTypes: {
    rounded: {
      type: 'string',
      defaultValue: 'base',
      options: [
        'none',
        'sm',
        'base',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        'full',
        'pill',
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Card',
};
