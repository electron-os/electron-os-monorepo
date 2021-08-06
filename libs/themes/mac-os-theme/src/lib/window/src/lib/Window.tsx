import React, { FunctionComponent } from 'react';
import * as ReactDesktop from 'react-desktop/macOs';
import { Rnd } from 'react-rnd';
import { Style } from './Window.styles';
import type { IWindowProps } from './Window.types';
import './window.module.scss';

const defaultProps: IWindowProps = {
  minHeight: 400,
  minWidth: 400,
  children: 'Demo content',
  title: 'Demo window',
};

export const Window: FunctionComponent<IWindowProps> = ({
  title,
  url,
  children,
  minHeight,
  minWidth,
  ...rest
} = defaultProps) => {
  const { root, iframe } = Style({});

  return (
    <Rnd minHeight={minHeight} minWidth={minWidth}>
      <ReactDesktop.Window
        {...root}
        {...rest}
        width="100%"
        height="100%"
        chrome
      >
        <ReactDesktop.TitleBar title={title} controls />
        {url ? <iframe src={url} title={title} {...iframe} /> : children}
      </ReactDesktop.Window>
    </Rnd>
  );
};

export default Window;
