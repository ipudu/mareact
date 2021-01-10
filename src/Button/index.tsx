import React from 'react';
import classNames from 'classnames';
import MuiButton from '@material-ui/core/Button';

import styles from '../utils/ButtonStyles';

export interface IButtonProps {
  /**
   * @description Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * @description The variant to use.
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * @description The color of the component.
   */
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * @description The size of the button.
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * @description If true, the button will be disabled.
   */
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  className,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  children,
  ...other
}) => {
  return (
    <MuiButton
      className={classNames(
        disabled ? styles[variant].light : styles[variant][color],
        className,
      )}
      disabled={disabled}
      size={size}
      {...other}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
