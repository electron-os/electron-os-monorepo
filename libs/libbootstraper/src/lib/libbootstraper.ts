import type { IBootstraperProps } from './libbootstraper.types';

export const bootstrap = ({ info }: IBootstraperProps) => {
  console.log('Bootstraper !');
  console.log(info);
};
