import { FunctionComponent, Fragment } from 'react';
import { Background, TaskBar } from '../components';
import { Window } from '@electronos/mac-os-theme';
import { Style } from './App.styles';
import type { IAppProps } from './App.types';
import './app.module.scss';

export const App: FunctionComponent<IAppProps> = ({ ...rest }) => {
  const { root } = Style({});

  return (
    <Fragment>
      <Background image="https://picsum.photos/800" size="fill" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        quam id adipisci enim ex magnam nam. Eveniet reprehenderit veritatis,
        excepturi dicta consequatur aspernatur eaque dolorem quas, laborum
        eligendi minus obcaecati?
      </p>
      <TaskBar />
    </Fragment>
  );
};

export default App;
