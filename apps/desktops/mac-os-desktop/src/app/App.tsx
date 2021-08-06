import React, { FunctionComponent } from 'react';
import { Window, Button } from '@electronos/mac-os-theme';
import { Style } from './App.styles';
import type { IAppProps } from './App.types';
import './app.module.scss';

export const App: FunctionComponent<IAppProps> = ({ ...rest }) => {
  const { root } = Style({});

  return <Button />;
};

export default App;
