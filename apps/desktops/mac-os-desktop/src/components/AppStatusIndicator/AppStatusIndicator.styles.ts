import { style } from '@formaxui/utils';
import type { IAppStatusIndicatorStyleProps } from './AppStatusIndicator.types';

// eslint-disable-next-line
export const Styles = ({}: IAppStatusIndicatorStyleProps) => {
  const paddingX = 10;

  return {
    root: style({
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 'auto',
      height: '3px',
      paddingRight: `${paddingX}px`,
      paddingLeft: `${paddingX}px`,
      '& > :first-child': {
        borderRadius: '4px',
      },
    }),
    focus: style({
      background: 'red',
    }),
    hidden: style({
      display: 'none',
    }),
    background: style({
      background: 'yellow',
    }),
    fullSize: style({
      width: '100%',
      height: '100%',
    }),
  };
};

export default Styles;
