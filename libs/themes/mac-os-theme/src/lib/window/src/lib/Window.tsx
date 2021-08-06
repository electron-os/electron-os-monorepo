import { FunctionComponent, createElement } from 'react';
import {
  TitleBar as RDTitleBar,
  Window as RDWindow,
} from 'react-desktop/macOs';
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
      <RDWindow {...window} {...rest} width="100%" height="100%" chrome>
        <RDTitleBar title={title} controls />
        {createElement(contentObject.element, {
          ...contentObject.properties,
          ...content,
        })}
      </RDWindow>
    </Rnd>
  );
};

export default Window;
