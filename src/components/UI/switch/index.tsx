import React, { useState } from 'react';
import classNames from 'classnames';
import './style/index';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  size?: 'small' | 'default';
  onChange?: (checked: boolean, e: React.MouseEvent) => any;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const [derivedChecked, setDerivedChecked] = useState(props.defaultChecked || false);
  const { className, size, disabled, onChange, style } = props;
  const prefix = 'trl-switch';
  const switchClassName = classNames(prefix, [className, size], {
    checked: derivedChecked,
    disabled,
  });

  const handleClick: React.MouseEventHandler = (e) => {
    if (disabled) {
      return;
    }
    setDerivedChecked(!derivedChecked);

    if (onChange) {
      onChange(!derivedChecked, e);
    }
  };

  return (
    <span className={switchClassName} onClick={handleClick} style={style}>
      <span className={classNames(`${prefix}-core`)} />
    </span>
  );
};
export default Switch;
