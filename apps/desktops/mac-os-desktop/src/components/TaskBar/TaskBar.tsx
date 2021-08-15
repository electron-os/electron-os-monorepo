import { FunctionComponent } from 'react';
import { Launcher } from '..';
import { Styles } from './TaskBar.styles';
import type { ITaskBarProps } from './TaskBar.types';

export const TaskBar: FunctionComponent<ITaskBarProps> = ({ ...rest }) => {
  const { root, acrylic } = Styles({});

  return (
    <div {...root} {...acrylic} {...rest}>
      {Array(5)
        .fill(0)
        .map((_value, key) => (
          <Launcher icon="https://picsum.photos/50" key={key} />
        ))}
      <Launcher icon="https://picsum.photos/50" />
    </div>
  );
};

export default TaskBar;
