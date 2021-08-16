export interface ILauncherProps {
  icon: string;
  onClick?: () => void;
}

export interface ILauncherStyleProps {
  icon: ILauncherProps['icon'];
}
