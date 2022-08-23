import * as React from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './typings';
import Panel from './panel';
import { loadOptions } from '@babel/core';

class Modal extends React.Component<ModalProps> {
  public static success: (options: ModalProps) => void = (props) => {
    console.log(props);
  };

  public static info: (options: ModalProps) => void;

  public static warning: (options: ModalProps) => void;

  public static warn: (options: ModalProps) => void;

  public static error: (options: ModalProps) => void;

  public static confirm: (options: ModalProps) => void;

  public render() {
    const node = <Panel {...this.props} />;
    return createPortal(node, document.body);
  }
}

export default Modal;
