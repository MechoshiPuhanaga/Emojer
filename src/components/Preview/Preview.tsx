import { FC, memo } from 'react';

import { useClass } from '@services';

interface PreviewProps {
  className?: string;
  html: string;
}

import styles from './Preview.scss';

const Preview: FC<PreviewProps> = ({ className, html }) => {
  const classNames = useClass([styles.Container, className], [className]);

  return html ? (
    <div
      className={classNames}
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  ) : null;
};

export default memo(Preview);
