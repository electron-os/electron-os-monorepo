import { style } from '@formaxui/utils';
import type { ILauncherStyleProps } from './Launcher.types';

export const Styles = ({ icon }: ILauncherStyleProps) => {
  return {
    root: style({
      borderRadius: '5px',
      position: 'relative',
      width: '50px',
      height: '50px',
      '&:hover': {
        background: 'rgba(255,255,255,0.2)',
      },
      '&:active': {
        '&:before': {
          transform: 'scale(0.9)',
        },
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        inset: '5px',
        backgroundImage: `url(${icon})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'all 0.1s ease-in-out',
      },
    }),
  };
};

export default Styles;
