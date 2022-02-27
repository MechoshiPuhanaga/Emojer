import { forwardRef, LegacyRef } from 'react';

import { useClass } from '@services';

import styles from './Input.scss';

interface InputProps {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className }, ref) => {
  return (
    <div
      className={useClass([styles.Container, className], [className])}
      contentEditable
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
    ></div>
  );
});

export default Input;
