import React, { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import clsx from 'clsx';
import styles from './styles.module.scss';

export type CopyableProps = {
  valueToCopy: string,
  onCopy?: () => void,
  withIcon?: boolean,
  className?: string,
  classNameIcon?: string,
};

export const Copyable: FC<CopyableProps> = ({
  valueToCopy,
  onCopy = () => {},
  children,
  withIcon,
  className,
  classNameIcon,
}) => (
  <CopyToClipboard
    text={valueToCopy}
    onCopy={() => {
      onCopy();
    }}
  >
    <div className={clsx(
      styles.copy,
      withIcon && styles.withIcon,
      className,
    )}
    >
      {children}
      {withIcon && <img src="" alt="" className={clsx(styles.icon, classNameIcon)} />}
    </div>
  </CopyToClipboard>
);
