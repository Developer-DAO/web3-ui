import { Button } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      defaultValue: 'primary',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'neutral',
        'blue',
        'cyan',
        'gray',
        'green',
        'orange',
        'yellow',
        'orange',
        'pink',
        'purple',
        'red',
        'yellow',
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
