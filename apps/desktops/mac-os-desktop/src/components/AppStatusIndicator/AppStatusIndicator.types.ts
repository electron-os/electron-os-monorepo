import type { HTMLAttributes } from 'react';

export interface IAppStatusIndicatorProps
  extends HTMLAttributes<HTMLDivElement> {
  status?: 'hidden' | 'focus' | 'background';
}

// eslint-disable-next-line
export interface IAppStatusIndicatorStyleProps {}
