import { style } from '@formaxui/utils';
import type { IWindowStyleProps } from './Window.types';

// eslint-disable-next-line
export const Style = ({}: IWindowStyleProps) => {
  return {
    root: style({}),
    iframe: style({
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    }),
  };
};

export default Style;
