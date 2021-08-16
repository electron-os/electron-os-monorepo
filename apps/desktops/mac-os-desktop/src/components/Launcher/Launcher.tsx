import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { AppStatusIndicator } from '..';
import { bootstrap } from '../../api';
import { Styles } from './Launcher.styles';
import type { ILauncherProps } from './Launcher.types';

export class Launcher extends Component<ILauncherProps> {
  componentDidMount() {
    findDOMNode(this)?.addEventListener('click', this.onClickHandler);
  }

  componentWillUnmount() {
    findDOMNode(this)?.removeEventListener('click', this.onClickHandler);
  }

  onClickHandler = () => {
    bootstrap({ info: this.props.info });

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const { root } = Styles({ icon: this.props.info.icon });

    return (
      <div {...root}>
        <AppStatusIndicator status="background" />
      </div>
    );
  }
}

export default Launcher;
