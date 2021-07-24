import { style } from '@electron-os-monorepo/utils';
import type { ITerminalStyleProps } from './Terminal.types';

// eslint-disable-next-line
export const Style = ({}: ITerminalStyleProps) => {
  return { root: style({}) };
};

export default Style;
