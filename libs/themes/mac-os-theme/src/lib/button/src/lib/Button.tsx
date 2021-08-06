import { FunctionComponent } from 'react';
import { Button as RDButton } from 'react-desktop/macOs';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';
import './button.module.scss';

export const Button: FunctionComponent<IButtonProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <RDButton {...root} {...rest} color="blue">
      Example button
    </RDButton>
  );
};

export default Button;
