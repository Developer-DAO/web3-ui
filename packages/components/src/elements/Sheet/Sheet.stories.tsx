import { Sheet, SheetTrigger, SheetContent } from './Sheet';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';

export default {
  title: 'Elements/Sheet',
  component: Sheet,
  argTypes: {},
} as ComponentMeta<typeof Sheet>;

const Template: ComponentStory<typeof Sheet> = (args) => (
  <Sheet {...args}>
    <SheetTrigger asChild>
      <Button>Open Left</Button>
    </SheetTrigger>
    <SheetContent side="left">content here</SheetContent>
  </Sheet>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Sheet',
};
