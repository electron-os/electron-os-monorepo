import { style } from '@formaxui/utils';
import type { IWindowStyleProps } from './Window.types';

// eslint-disable-next-line
export const Style = ({}: IWindowStyleProps) => {
  return {
    root: style({}),
    window: style({
      position: 'absolute',
      inset: 0,
    }),
    content: style({
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px',
    }),
  };
};

export default Style;
