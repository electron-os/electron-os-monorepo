import { FunctionComponent, createElement, useState } from 'react';
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
  onClose,
  onMinimize,
  onMaximize,
  ...rest
}) => {
  children = children ?? defaultProps.children;
  const { root, absolute, content } = Style({});
  const [draggableFrameStyle, setDraggableFrameStyle] = useState(root);
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

  const onCloseHandler = (customHandler?: IWindowProps['onClose']) => () => {
    if (customHandler) {
      customHandler();
    }
  };

  const onMinimizeHandler =
    (customHandler?: IWindowProps['onMinimize']) => () => {
      if (customHandler) {
        customHandler();
      }
    };

  const onMaximizeHandler =
    (customHandler?: IWindowProps['onMaximize']) => () => {
      setDraggableFrameStyle({ ...root, ...absolute });

      if (customHandler) {
        customHandler();
      }
    };

  return (
    <Rnd
      {...draggableFrameStyle}
      minHeight={`${minHeight ?? defaultProps.minHeight}px`}
      minWidth={`${minWidth ?? defaultProps.minWidth}px`}
    >
      <RDWindow {...absolute} {...rest} width="100%" height="100%" chrome>
        <RDTitleBar
          title={title}
          controls
          onCloseClick={onCloseHandler(onClose)}
          onMinimizeClick={onMinimizeHandler(onMinimize)}
          onResizeClick={onMaximizeHandler(onMaximize)}
        />
        {createElement(contentObject.element, {
          ...contentObject.properties,
          ...content,
          ...absolute,
        })}
      </RDWindow>
    </Rnd>
  );
};

export default Window;
