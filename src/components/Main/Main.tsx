import { FC, memo, useState } from 'react';

import { emojis } from '@assets/icons';
import { Editor, Preview } from '@components';

import styles from './Main.scss';

const Main: FC = () => {
  const [html, setHtml] = useState('');

  return (
    <main className={styles.Container}>
      <h1 className={styles.Heading}>Welcome to Emojer</h1>
      <Editor
        className={styles.Editor}
        clearOnSubmit
        emojis={emojis}
        onSubmit={(data) => setHtml(data.html)}
      />
      <Preview className={styles.Preview} html={html} />
    </main>
  );
};

export default memo(Main);
