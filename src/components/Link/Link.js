import styles from './Link.module.scss';
import cn from 'classnames';

export const Link = ({url, text, ...props}) => {
    return (
        <a href={url} className={cn('link', styles.link)} {...props}>{text}</a>
    );
};
