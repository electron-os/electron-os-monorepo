import { style } from '@formaxui/utils';
import type { ITaskBarStyleProps } from './TaskBar.types';

// eslint-disable-next-line
export const Styles = ({}: ITaskBarStyleProps) => {
  const childsMargin = 10;
  const minSize = 50;

  return {
    root: style({
      position: 'fixed',
      top: 'auto',
      bottom: 10,
      left: '50%',
      right: 'auto',
      margin: 'auto',
      width: 'auto',
      minWidth: `${minSize}px`,
      minHeight: `${minSize}px`,
      backgroundColor: 'rgba(255,255,255,0.3)',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      borderRadius: '4px',
      boxShadow:
        'rgb(0 0 0 / 31%) 0px 0px 1px, rgb(0 0 0 / 18%) 0px 0px 5px, rgb(0 0 0 / 30%) 0px 8px 50px',
      padding: '10px 15px',
      '& :first-child': {
        marginRight: `${childsMargin}px`,
      },
      '& :last-child': {
        marginLeft: `${childsMargin}px`,
      },
      '& :not(:first-child):not(:last-child)': {
        marginLeft: `${childsMargin}px`,
        marginRight: `${childsMargin}px`,
      },
    }),
    acrylic: style({
      backdropFilter: 'blur(5px)',
    }),
  };
};

export default Styles;
