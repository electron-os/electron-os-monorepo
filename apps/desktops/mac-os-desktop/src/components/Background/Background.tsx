import { FunctionComponent } from 'react';
import { Style } from './Background.styles';
import type { IBackgroundProps } from './Background.types';

export const Background: FunctionComponent<IBackgroundProps> = ({
  image,
  color,
  repeat,
  ...rest
}) => {
  const { root } = Style({ image, color, repeat });

  return <div {...rest} {...root} />;
};

export default Background;
