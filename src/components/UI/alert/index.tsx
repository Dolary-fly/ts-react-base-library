import React, { CSSProperties, FC, MouseEvent, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { AlertCircle, X } from '@geist-ui/icons';
import Transition from '../transition';

export type AlertType = 'success' | 'error' | 'warning' | 'info';
interface AlertProps {
  title?: ReactNode;
  closable?: boolean;
  type?: AlertType;
  showIcon?: boolean;
  iconColor?: string;
  onClose?: (e: MouseEvent) => void;
  styles?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
}
const Alert: FC<AlertProps> = (props) => {
  const { title, closable, type, showIcon, iconColor, children, onClose, className, styles } =
    props;
  const classes = classNames('my-alert', className, {
    [`my-alert-${type}`]: type,
  });
  const [show, setShow] = useState(true);
  let icon;
  switch (type) {
    case 'success': {
      icon = <AlertCircle color={iconColor} />;
      break;
    }
    case 'error': {
      icon = <AlertCircle color={iconColor} />;
      break;
    }
    default: {
      icon = <AlertCircle color={iconColor} />;
      break;
    }
  }
  const handleClick = (e: MouseEvent) => {
    onClose && onClose(e);
    setShow(false);
  };
  return (
    <Transition in={show} timeout={150} animation="zoom-in-top">
      <div className={classes} style={styles}>
        {showIcon && <span className="my-alert-icon">{icon}</span>}
        <div className="my-alert-content">
          <div className="my-alert-title">{title}</div>
          <div className="my-alert-description">{children}</div>
        </div>
        {closable && (
          <span className="my-alert-close" onClick={handleClick}>
            <X color={iconColor} />
          </span>
        )}
      </div>
    </Transition>
  );
};
Alert.defaultProps = {
  type: 'success',
  closable: true,
};
export default Alert;
