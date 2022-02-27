import { FC, memo } from 'react';

import styles from './IconButton.scss';

interface IconButtonProps {
  onClick: ({ src }: { src: string }) => void;
  src: string;
}

const IconButton: FC<IconButtonProps> = ({ onClick, src }) => {
  return (
    <button className={styles.Container} onClick={() => onClick({ src })}>
      <img className={styles.Icon} src={src} />
    </button>
  );
};

export default memo(IconButton);
