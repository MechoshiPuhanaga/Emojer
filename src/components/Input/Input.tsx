import { forwardRef, LegacyRef } from 'react';

import { useClass } from '@services';

import styles from './Input.scss';

interface InputProps {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className }, ref) => {
  return (
    <div
      aria-label="textbox"
      className={useClass([styles.Container, className], [className])}
      contentEditable
      data-test="input"
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      role="textbox"
    ></div>
  );
});

export default Input;
