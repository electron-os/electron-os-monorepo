import { FunctionComponent } from 'react';
import { Styles } from './ProgressBar.styles';
import type { IProgressBarProps } from './ProgressBar.types';

export const ProgressBar: FunctionComponent<IProgressBarProps> = ({
  ...rest
}) => {
  const { root } = Styles({});

  return <div {...root} {...rest} />;
};

export default ProgressBar;
