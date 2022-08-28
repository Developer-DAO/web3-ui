import { Link } from './Link';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Click Me!</Link>
);

export const Default = Template.bind({});
Default.args = {
  href: 'https://www.tomorrowtides.com/google273.html',
  target: '_blank',
};
