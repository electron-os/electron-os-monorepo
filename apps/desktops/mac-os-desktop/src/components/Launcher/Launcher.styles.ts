import { style } from '@formaxui/utils';
import type { ILauncherStyleProps } from './Launcher.types';

export const Styles = ({ icon }: ILauncherStyleProps) => {
  return {
    root: style({
      borderRadius: '5px',
      position: 'relative',
      width: '50px',
      height: '50px',
      background: 'red',
      '&:before': {
        content: '""',
        position: 'absolute',
        inset: '5px',
        backgroundImage: `url(${icon})`,
        borderRadius: '5px',
      },
    }),
  };
};

export default Styles;
