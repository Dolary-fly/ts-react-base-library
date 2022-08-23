import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalProps, ModalType } from './typings';
import Panel from './panel';
import Button from '../button';

type Props = ModalProps & {
  id?: string;
  content?: React.ReactNode;
};

export function create(type: ModalType) {
  return (options: ModalProps = {}) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    let props: Props = {
      prefixCls: 'dk-modal',
      width: 420,
      ...options,
    };
    console.log('options', options);

    ReactDOM.render(getPanel(props), div);

    setTimeout(() => {
      props.visible = true;
      ReactDOM.render(getPanel(props), div);
    }, 10);

    function destroy() {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }

    function update(newProps: Props = {}) {
      props = {
        ...props,
        ...newProps,
      };
      ReactDOM.render(getPanel(props), div);
    }

    function getPanel(props: Props) {
      const { title, content, prefixCls, onConfirm, ...attributes } = props;
      const handleConfirmClick = () => {
        update({
          visible: false,
        });
        if (typeof props.onConfirm === 'function') {
          props.onConfirm();
        }
      };
      const handleCancelClick = () => {
        update({
          visible: false,
        });
        if (typeof props.onCancel === 'function') {
          props.onCancel();
        }
      };
      const contentNode = (
        <div className={`${prefixCls}-body-container`}>
          <span className={`${prefixCls}-body-title`}>{title}</span>
          <div className={`${prefixCls}-body-content`}>{content}</div>
        </div>
      );
      return (
        <Panel
          {...attributes}
          onClose={destroy}
          onConfirm={handleConfirmClick}
          onCancel={handleCancelClick}
        >
          {contentNode}
        </Panel>
      );
    }

    return {
      destroy,
      update,
    };
  };
}
