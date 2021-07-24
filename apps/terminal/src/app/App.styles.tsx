import { style } from '@electron-os-monorepo/utils';
import type { IAppStyleProps } from './App.types';

// eslint-disable-next-line
export const Style = ({}: IAppStyleProps) => {
  return { root: style({}) };
};

export default Style;
