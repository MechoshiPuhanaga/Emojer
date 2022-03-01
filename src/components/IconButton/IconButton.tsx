import { FC, memo, useEffect, useRef } from 'react';

import styles from './IconButton.scss';

interface IconButtonProps {
  alt: string;
  dataTest: string | number;
  focused?: boolean;
  onClick: (icon: IconObject) => void;
  src: string;
}

const IconButton: FC<IconButtonProps> = ({ alt, dataTest, focused, onClick, src }) => {
  const elementRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focused && elementRef.current) {
      elementRef.current.focus();
    }
  }, [focused]);

  return (
    <button
      className={styles.Container}
      data-test={`icon-button-${dataTest}`}
      onClick={() => onClick({ alt, src })}
      ref={elementRef}
      tabIndex={-1}
    >
      <img alt={alt} className={styles.Icon} src={src} />
    </button>
  );
};

export default memo(IconButton);
