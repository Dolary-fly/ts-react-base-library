import classNames from 'classnames';
import * as React from 'react';
import './style';

export type ButtonProps = {
  prefixCls?: string;
  className?: string;
  size?: 'small' | 'default' | 'large';
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'link';
  htmlType?: 'submit' | 'button' | 'reset';
  outline?: boolean;
  round?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<any>;
};
export type ButtonState = {
  spinning?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    prefixCls,
    type,
    outline,
    round,
    size,
    className,
    disabled,
    loading,
    htmlType,
    ...attibutes
  } = props;

  const buttonClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: !outline,
      [`${prefixCls}-large`]: size === 'large',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-outline-${type}`]: outline,
      [`${prefixCls}-rounded`]: round,
    },
    className,
  );
  const loadingNode = !!loading && (
    <div
      className={classNames(`${prefixCls}-loading`, {
        [`${prefixCls}-loading-default`]: type === 'default',
        [`${prefixCls}-loading-large`]: size === 'large',
        [`${prefixCls}-loading-small`]: size === 'small',
        [`${prefixCls}-loading-with-child`]: !!children,
      })}
    />
  );

  return (
    <button
      {...attibutes}
      type={htmlType}
      className={buttonClassName}
      disabled={disabled || loading}
    >
      {loadingNode}
      {children}
    </button>
  );
};

Button.defaultProps = {
  prefixCls: 'dk-btn',
  size: 'default',
  type: 'default',
  htmlType: 'button',
};

export default Button;
