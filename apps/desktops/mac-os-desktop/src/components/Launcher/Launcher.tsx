import { FunctionComponent } from 'react';
import { Styles } from './Launcher.styles';
import type { ILauncherProps } from './Launcher.types';

export const Launcher: FunctionComponent<ILauncherProps> = ({
  icon,
  ...rest
}: ILauncherProps) => {
  const { root } = Styles({ icon });

  return <div {...root} {...rest} />;
};

export default Launcher;
