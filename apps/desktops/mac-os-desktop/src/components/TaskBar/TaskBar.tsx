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
          <Launcher
            icon="https://img.icons8.com/fluency/48/000000/folder-invoices--v1.png"
            key={key}
          />
        ))}
      <Launcher icon="https://img.icons8.com/fluency/48/000000/folder-invoices--v1.png" />
    </div>
  );
};

export default TaskBar;
