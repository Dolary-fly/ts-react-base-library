import * as React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { X } from '@geist-ui/icons';
import { ModalProps, ModalState } from './typings';
import Button from '../button';

const ESC_KEY = 27;

class ModalPanel extends React.Component<ModalProps, ModalState> {
  public static defaultProps = {
    prefixCls: 'dk-modal',
    closeByEsc: true,
    showFooter: true,
  };

  public static success: any;

  public readonly bodyRef: React.RefObject<HTMLDivElement>;

  constructor(props: ModalProps) {
    super(props);
    this.state = {
      visible: false,
      bodyVisible: false,
    };
    this.bodyRef = React.createRef();
  }

  public componentDidUpdate(prevProps: ModalProps, prevState: ModalState) {
    if (this.props.visible && !prevProps.visible) {
      this.openModal();
    } else if (!this.props.visible && prevProps.visible) {
      this.closeModal();
    }

    if (this.state.visible && !prevState.visible) {
      setTimeout(() => {
        this.focusBody();
      }, 0);
    }
  }

  public render() {
    if (!this.state.visible) {
      return null;
    }

    const {
      prefixCls,
      showFooter,
      footer,
      closeByEsc,
      title,
      className,
      width,
      children,
      showCancel = true,
      showOK = true,
    } = this.props;
    console.log('props', this.props);
    const footerNode = (
      <>
        {showCancel && (
          <Button type="default" onClick={this.props.onCancel}>
            Cancel
          </Button>
        )}

        {showOK && (
          <Button
            type="primary"
            className={`${prefixCls}-footer-confirm`}
            onClick={this.props.onConfirm}
          >
            OK
          </Button>
        )}
      </>
    );

    const bodyNode = (
      <CSSTransition
        in={this.state.bodyVisible}
        unmountOnExit
        timeout={300}
        classNames={`${prefixCls}-panel`}
        onExited={this.handleExited}
      >
        <div
          className={classNames(`${prefixCls}-panel`, className)}
          onKeyDown={closeByEsc ? this.handleKeydown : undefined}
          tabIndex={-1}
          ref={this.bodyRef}
          style={width !== undefined ? { width } : {}}
        >
          {!!title && (
            <>
              <div className={`${prefixCls}-header`}>{title}</div>
              <div className={`${prefixCls}-close`} onClick={this.handleClose}>
                <X />
              </div>
            </>
          )}
          <div className={`${prefixCls}-body`}>{children}</div>
          {!!showFooter && (
            <div className={`${prefixCls}-footer`}>
              {footer === undefined ? footerNode : footer}
            </div>
          )}
        </div>
      </CSSTransition>
    );

    return (
      <div className={`${prefixCls}`}>
        <CSSTransition timeout={300} in={this.state.bodyVisible} classNames={`${prefixCls}-mask`}>
          <div className={`${prefixCls}-mask`} onClick={this.handleClose} />
        </CSSTransition>
        {bodyNode}
      </div>
    );
  }

  public openModal = () => {
    this.setState(
      {
        visible: true,
      },
      () => {
        this.setState({
          bodyVisible: true,
        });
      },
    );
  };

  public closeModal = () => {
    this.setState({
      bodyVisible: false,
    });
  };

  public handleClose = () => {
    this.closeModal();
  };

  public handleExited = () => {
    const { onClose } = this.props;
    this.setState({
      visible: false,
    });
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  public focusBody = () => {
    const bodyElement = this.bodyRef.current;
    if (bodyElement) {
      bodyElement.focus();
    }
  };

  public handleKeydown = (event: any) => {
    if (event.keyCode === ESC_KEY) {
      event.stopPropagation();
      this.closeModal();
    }
  };
}

export default ModalPanel;
