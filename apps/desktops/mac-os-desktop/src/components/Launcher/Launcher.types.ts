import type { HTMLAttributes } from 'react';

export interface ILauncherProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
}

export interface ILauncherStyleProps {
  icon: ILauncherProps['icon'];
}
