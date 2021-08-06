import React, { FunctionComponent } from 'react';
import { Window } from '@electronos/mac-os-theme';
import { Style } from './App.styles';
import type { IAppProps } from './App.types';
import './app.module.scss';

export const App: FunctionComponent<IAppProps> = ({ ...rest }) => {
  const { root } = Style({});

  return <Window title="example title" url="https://moraj.ir" />;
};

export default App;
