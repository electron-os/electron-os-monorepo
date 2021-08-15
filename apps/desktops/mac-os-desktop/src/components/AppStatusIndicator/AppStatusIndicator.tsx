import { FunctionComponent } from 'react';
import { ProgressBar } from '..';
import { Styles } from './AppStatusIndicator.styles';
import type { IAppStatusIndicatorProps } from './AppStatusIndicator.types';

export const AppStatusIndicator: FunctionComponent<IAppStatusIndicatorProps> =
  ({ status, ...rest }) => {
    status = status ?? 'hidden';
    const { root, fullSize, ...statusStyles } = Styles({});

    /*return (
      <div {...root} {...rest}>
        <div {...statusStyles[status]} {...fullSize} />
      </div>
    );*/

    return (
      <div {...root} {...rest}>
        <ProgressBar />
      </div>
    );
  };

export default AppStatusIndicator;
