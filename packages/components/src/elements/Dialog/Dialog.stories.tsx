import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';

export default {
  title: 'Elements/Dialog',
  component: Dialog,
  argTypes: {},
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Edit profile</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

export const Default = Template.bind({});
