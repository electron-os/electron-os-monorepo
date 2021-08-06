import React, { FunctionComponent } from 'react';
import * as ReactDesktop from 'react-desktop/macOs';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';
import './button.module.scss';

export const Button: FunctionComponent<IButtonProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <ReactDesktop.Button {...root} {...rest} color="blue">
      Example button
    </ReactDesktop.Button>
  );
};

export default Button;
