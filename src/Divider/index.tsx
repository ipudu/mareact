import React from 'react';
import classnames from 'classnames';

import styles from '../utils/DividerStyles';

export interface IDividerProps {
  /**
   * @description Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * @description The variant to use.
   */
  variant?: 'solid' | 'dotted' | 'dashed';
  /**
   * @description The color of the component.
   */
  color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';
}

const Divider: React.FC<IDividerProps> = ({
  className,
  variant = 'solid',
  color = 'default',
  children,
  ...other
}) => {
  const style = styles();
  return (
    <>
      <div className={classnames(style.root, style[variant], style[color])} />
    </>
  );
};

export default Divider;
