import React from 'react';
import './button.css';

interface ButtonProps {
  /** 按鈕顯示文字 */
  label: string

  /** 預設樣式 */
  primary?: boolean, 

  /** 按鈕底色 */
  backgroundColor?: string, 

  /** 按鈕尺寸 */
  size?: 'small'|'medium'|'large', 

  /** click event */
  onClick?: () => void
}
/**
 * Primary UI component for user interaction
 */
const Button = ({ 
  primary = false, 
  backgroundColor, 
  size = 'medium', 
  label, 
  ...otherProps 
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;