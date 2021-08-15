import type { HTMLAttributes } from 'react';

export interface IBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  color?: string;
  repeat?: boolean;
  size?: 'fill' | 'original' | 'stretch';
}

export interface IBackgroundStyleProps {
  image?: IBackgroundProps['image'];
  color?: IBackgroundProps['color'];
  repeat?: IBackgroundProps['repeat'];
  size?: IBackgroundProps['size'];
}
