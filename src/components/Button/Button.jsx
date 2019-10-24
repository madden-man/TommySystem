import React from 'react';
import classnames from 'classnames';

import './button.css';

export const Button = ({
  className,
  onClick,
  children,
  appearance,
  ...rest,
}) => {
  const btnProps = {
    className: classnames('tom-c-btn', {
      'tom-c-btn--primary': appearance === 'primary',
      'tom-c-btn--secondary': appearance === 'secondary',
      [className]: !!className,
    }),
    ...rest,
  }

  return (
    <button {...btnProps}>
      {children}
    </button>
  );
}

export default Button;
