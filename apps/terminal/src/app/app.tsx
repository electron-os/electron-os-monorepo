import React, { FunctionComponent } from 'react';
import { Style } from './App.styles';
import type { IAppProps } from './App.types';

export const App: FunctionComponent<IAppProps> = ({ ...rest }) => {
  const { root } = Style({});

  return (
    <div {...rest} {...root}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ipsa,
      perferendis, voluptas ducimus minima corrupti, corporis eius ipsam
      mollitia exercitationem distinctio! Debitis quas laboriosam, nobis
      reiciendis odio sapiente ab aliquid.
    </div>
  );
};

export default App;
