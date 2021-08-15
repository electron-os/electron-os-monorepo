import { style } from '@formaxui/utils';
import type { IProgressBarStyleProps } from './ProgressBar.types';

// eslint-disable-next-line
export const Styles = ({}: IProgressBarStyleProps) => {
  return {
    root: style({
      width: '100%',
      height: '100%',
      background: 'gray',
    }),
  };
};

export default Styles;
