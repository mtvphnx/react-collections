import styles from './Element.module.scss';

export const Element = ({children, ...props}) => {
    return (
        <div className={styles.element} {...props}>
            {children}
        </div>
    );
};
