import { CSSProperties } from 'react';
import { Story, Meta } from '@storybook/react';
import { Window, IWindowProps } from '.';

export default {
  component: Window,
  title: 'Components/Window',
} as Meta;

const CustomContent = () => {
  const style: CSSProperties = {
    background: '#eeeeee',
    color: 'red',
  };

  return (
    <div style={style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi
      deserunt, sunt optio error doloribus nisi nemo reprehenderit ea officia
      asperiores numquam dolore, maiores quas magnam quidem repellat saepe!
      Sint.
    </div>
  );
};

const Template: Story<IWindowProps> = (args) => <Window {...args} />;

export const URLWindow = Template.bind({});
export const ContentWindow = Template.bind({});
export const GridOrganized = Template.bind({});

URLWindow.args = {
  title: 'URL Window Demo',
  url: 'https://morajlab.com',
};

ContentWindow.args = {
  title: 'Content Window Demo',
  children: <CustomContent />,
  onMinimize: () => {
    console.log('Minimize custom callback function called !');
  },
};

GridOrganized.args = {
  title: 'Grid Window Demo',
  children: <CustomContent />,
};
