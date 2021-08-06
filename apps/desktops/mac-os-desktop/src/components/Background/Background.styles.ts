import { style } from '@formaxui/utils';
import type { IBackgroundStyleProps } from './Background.types';

export const Style = ({ image, color, repeat }: IBackgroundStyleProps) => {
  color = color ?? '#000000';

  return {
    root: style({
      position: 'absolute',
      inset: 0,
      background: image ? `url(${image})` : color,
      backgroundRepeat: repeat ? 'repeat' : 'no-repeat',
      backgroundPosition: 'center',
    }),
  };
};

export default Style;
