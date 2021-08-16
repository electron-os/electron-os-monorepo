import type { ILauncherInfoProps } from '../../types';

export interface ILauncherProps {
  info: ILauncherInfoProps;
  onClick?: () => void;
}

export interface ILauncherStyleProps {
  icon: ILauncherInfoProps['icon'];
}
