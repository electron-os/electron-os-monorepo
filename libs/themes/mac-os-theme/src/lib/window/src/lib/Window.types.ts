import type { HTMLAttributes } from 'react';

// eslint-disable-next-line
export interface IWindowProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  url?: string;
  minWidth?: number;
  minHeight?: number;
}

// eslint-disable-next-line
export interface IWindowStyleProps {}
