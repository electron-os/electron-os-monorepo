import { Story, Meta } from '@storybook/react';
import { Window, IWindowProps } from '.';

export default {
  component: Window,
  title: 'Window',
} as Meta;

const Template: Story<IWindowProps> = (args) => <Window {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Example window',
  children: (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
      aliquid odio sapiente velit dolore est iusto corrupti? Nam et corporis
      architecto quo, culpa consequuntur provident sunt obcaecati dolores illo
      deleniti?
    </div>
  ),
  url: 'https://moraj.ir',
};
