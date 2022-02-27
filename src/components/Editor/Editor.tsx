import { FC, memo, useCallback, useRef } from 'react';

import { EmojiSelector, Input } from '@components';
import { useClass } from '@services';

import styles from './Editor.scss';

interface EditorProps {
  className?: string;
  clearOnSubmit?: boolean;
  emojis: IconObject[];
  onSubmit: ({ html }: { html: string }) => void;
}

const Editor: FC<EditorProps> = ({ className, clearOnSubmit, emojis, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const clear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.innerHTML = '';
    }
  }, []);

  const onEmojiSelectHandler = useCallback((data: IconObject) => {
    const selection = window.getSelection();

    if (selection && inputRef.current) {
      inputRef.current.focus();

      const range = selection.getRangeAt(0);

      // Remove the selected content:
      range.deleteContents();

      // Move caret:
      selection.collapse(selection.focusNode, selection.anchorOffset);

      // Create image tag:
      const img = document.createElement('img');
      img.alt = data.alt;
      img.src = data.src;

      // Insert image tag at the caret position:
      range.insertNode(img);

      // Move caret after the image tag:
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, []);

  return (
    <div className={useClass([styles.Container, className], [className])}>
      <Input className={styles.Input} ref={inputRef} />
      <div className={styles.Menu}>
        <EmojiSelector emojis={emojis} onSelect={onEmojiSelectHandler} />
        <div>
          <button className={styles.Clear} onClick={clear}>
            Clear
          </button>
          <button
            className={styles.Submit}
            onClick={() => {
              onSubmit({ html: inputRef?.current?.innerHTML ?? '' });

              if (clearOnSubmit) {
                clear();
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Editor);
