import styles from './text.module.css';

interface TextProps {
    children: string | number;
}

export const Text = ({ children }: TextProps) => {
    return (
        <span className={styles.baseText}>{children}</span>
    )
}