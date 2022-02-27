import { FC, memo } from 'react';

import { IconButton } from '@components';

import styles from './EmojiSelector.scss';

interface EmojiSelectorProps {
  emojis: string[];
  onSelect: ({ src }: { src: string }) => void;
}

const EmojiSelector: FC<EmojiSelectorProps> = ({ emojis, onSelect }) => {
  return (
    <ul className={styles.Container}>
      {emojis.map((emoji) => {
        return (
          <li className={styles.Item} key={emoji}>
            <IconButton onClick={onSelect} src={emoji} />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(EmojiSelector);
