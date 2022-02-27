import { FC, memo, useCallback, useMemo, useState } from 'react';

import { Icon, IconButton } from '@components';

import styles from './EmojiSelector.scss';

interface EmojiSelectorProps {
  emojis: IconObject[];
  onSelect: (icon: IconObject) => void;
}

const EmojiSelector: FC<EmojiSelectorProps> = ({ emojis, onSelect }) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const focusedItem = useMemo(() => {
    return emojis[focusedIndex]?.alt ?? '';
  }, [emojis, focusedIndex]);

  const onKeyUpHandler = useCallback(
    (event) => {
      let newFocusedIndex: number;

      switch (event.code) {
        case 'ArrowDown':
          setFocusedIndex((currentFocusedIndex) => {
            newFocusedIndex = currentFocusedIndex + 1;

            if (newFocusedIndex === emojis.length) {
              newFocusedIndex = 0;
            }

            return newFocusedIndex;
          });

          break;

        case 'ArrowUp':
          setFocusedIndex((currentFocusedIndex) => {
            newFocusedIndex = currentFocusedIndex - 1;

            if (newFocusedIndex < 0) {
              newFocusedIndex = emojis.length - 1;
            }

            return newFocusedIndex;
          });
          break;

        case 'End':
          setFocusedIndex(emojis.length - 1);
          break;

        case 'Home':
          setFocusedIndex(0);
          break;

        case 'Escape':
        case 'Tab':
          setFocusedIndex(-1);
          break;
      }
    },
    [emojis.length]
  );

  return (
    <div
      aria-label="emoji-list"
      className={styles.Container}
      id="emoji-list"
      onKeyUp={onKeyUpHandler}
    >
      <Icon.Smile />
      <ul aria-labelledby="emoji-list" className={styles.List} role="listbox" tabIndex={0}>
        {emojis.map((emoji) => {
          return (
            <li className={styles.Item} key={emoji.alt} role="option">
              <IconButton
                alt={emoji.alt}
                focused={emoji.alt === focusedItem}
                onClick={onSelect}
                src={emoji.src}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(EmojiSelector);
