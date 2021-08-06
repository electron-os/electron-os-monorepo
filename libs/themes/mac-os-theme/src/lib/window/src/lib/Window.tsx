import React, { FunctionComponent, createElement } from 'react';
import * as ReactDesktop from 'react-desktop/macOs';
import { Rnd } from 'react-rnd';
import { Style } from './Window.styles';
import type { IWindowProps } from './Window.types';
import './window.module.scss';

const defaultProps: Partial<IWindowProps> = {
  minHeight: 400,
  minWidth: 400,
  children: '',
};

export const Window: FunctionComponent<IWindowProps> = ({
  title,
  url,
  children,
  minHeight,
  minWidth,
  ...rest
}) => {
  children = children ?? defaultProps.children;
  const { root, window, content } = Style({});
  const contentObject = url
    ? {
        element: 'iframe',
        properties: {
          title,
          src: url,
        },
      }
    : {
        element: 'div',
        properties: {
          children,
        },
      };

  return (
    <Rnd
      {...root}
      minHeight={`${minHeight ?? defaultProps.minHeight}px`}
      minWidth={`${minWidth ?? defaultProps.minWidth}px`}
    >
      <ReactDesktop.Window
        {...window}
        {...rest}
        width="100%"
        height="100%"
        chrome
      >
        <ReactDesktop.TitleBar title={title} controls />
        {createElement(contentObject.element, {
          ...contentObject.properties,
          ...content,
        })}
      </ReactDesktop.Window>
    </Rnd>
  );
};

export default Window;
