import { Checkbox } from './Checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
  argTypes: {
    color: {
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // onClick: () => {
  //   console.log('onClick');
  // },
};
