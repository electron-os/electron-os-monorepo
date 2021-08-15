import { FunctionComponent } from 'react';
import { AppStatusIndicator } from '..';
import { Styles } from './Launcher.styles';
import type { ILauncherProps } from './Launcher.types';

export const Launcher: FunctionComponent<ILauncherProps> = ({
  icon,
  ...rest
}: ILauncherProps) => {
  const { root } = Styles({ icon });

  return (
    <div {...root} {...rest}>
      <AppStatusIndicator status="background" />
    </div>
  );
};

export default Launcher;
