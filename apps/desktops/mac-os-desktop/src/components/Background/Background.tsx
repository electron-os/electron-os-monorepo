import { FunctionComponent } from 'react';
import { Style } from './Background.styles';
import type { IBackgroundProps } from './Background.types';

export const Background: FunctionComponent<IBackgroundProps> = ({
  image,
  color,
  repeat,
  size,
  ...rest
}) => {
  const styles = Style({ image, color, repeat, size });

  return (
    <div
      {...rest}
      {...Object.assign(
        {},
        styles.root,
        styles.absolute,
        styles.select,
        styles.zIndex
      )}
    >
      {size === 'stretch' ? (
        <img
          src={image}
          alt={image}
          {...Object.assign(
            {},
            styles.image,
            styles.absolute,
            styles.select,
            styles.zIndex
          )}
        />
      ) : null}
    </div>
  );
};

export default Background;
