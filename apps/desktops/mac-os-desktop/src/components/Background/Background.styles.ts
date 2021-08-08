import { style } from '@formaxui/utils';
import type { IBackgroundStyleProps } from './Background.types';

export const Style = ({
  image,
  color,
  repeat,
  size,
}: IBackgroundStyleProps) => {
  color = color ?? '#000000';

  return {
    root: style({
      background:
        size === 'stretch' ? 'transparent' : image ? `url(${image})` : color,
      backgroundRepeat: repeat ? 'repeat' : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: size === 'fill' ? 'cover' : 'initial',
    }),
    image: style({
      width: '100%',
      height: '100%',
    }),
    absolute: style({
      position: 'absolute',
      inset: 0,
    }),
    select: style({
      WebkitUserDrag: 'none',
    }),
  };
};

export default Style;
