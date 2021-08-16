import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { AppStatusIndicator } from '..';
import { Styles } from './Launcher.styles';
import type { ILauncherProps } from './Launcher.types';

export class Launcher extends Component<ILauncherProps> {
  customOnClickHandler: ILauncherProps['onClick'];

  constructor(props: ILauncherProps) {
    super(props);

    console.log(this.props);

    this.customOnClickHandler = this.props.onClick;
  }

  componentDidMount() {
    findDOMNode(this)?.addEventListener('click', this.onClickHandler);
  }

  componentWillUnmount() {
    findDOMNode(this)?.removeEventListener('click', this.onClickHandler);
  }

  onClickHandler = () => {
    if (this.customOnClickHandler) {
      this.customOnClickHandler();
    }
  };

  render() {
    const { root } = Styles({ icon: this.props.icon });

    return (
      <div {...root}>
        <AppStatusIndicator status="background" />
      </div>
    );
  }
}

export default Launcher;
