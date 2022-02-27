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
      aria-live="polite"
      className={classNames}
      dangerouslySetInnerHTML={{
        __html: html
      }}
      role="region"
    />
  ) : null;
};

export default memo(Preview);
