import React, {ReactNode} from "react";
import styles from './Blockquote.module.css'

type Props = {
  children: ReactNode
}

export const Blockquote: React.FC<Props> = ({children}) => <blockquote className={styles.blockquote}>{children}</blockquote>