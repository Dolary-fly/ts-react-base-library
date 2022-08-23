export type ModalProps = {
  prefixCls?: string;
  className?: string;
  visible?: boolean;
  disabled?: boolean;
  showFooter?: boolean;
  closeByEsc?: boolean;
  title?: string;
  content?: string;
  okText?: string;
  cancelText?: string;
  onConfirm?: VoidFunction;
  onCancel?: VoidFunction;
  onClose?: VoidFunction;
  /**
   *是否显示取消按钮
   */
  showCancel?: boolean;
  showOK?: boolean;
  footer?: React.ReactNode;
  width?: number;
};

export type ModalState = {
  visible: boolean;
  bodyVisible: boolean;
};

export type ModalType = 'success' | 'info' | 'warning' | 'error' | 'confirm';
