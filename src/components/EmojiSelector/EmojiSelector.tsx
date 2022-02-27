import { FC, memo } from 'react';

import { Icon, IconButton } from '@components';

import styles from './EmojiSelector.scss';

interface EmojiSelectorProps {
  emojis: string[];
  onSelect: ({ src }: { src: string }) => void;
}

const EmojiSelector: FC<EmojiSelectorProps> = ({ emojis, onSelect }) => {
  return (
    <div className={styles.Container} tabIndex={0}>
      <Icon.Smile />
      <ul className={styles.List}>
        {emojis.map((emoji) => {
          return (
            <li className={styles.Item} key={emoji}>
              <IconButton onClick={onSelect} src={emoji} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(EmojiSelector);
