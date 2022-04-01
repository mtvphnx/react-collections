import cn from 'classnames';
import styles from './Link.module.scss';

export const Link = ({url, text, className, ...props}) => {
    return (
        <a href={url} className={cn('link', styles.link, className)} {...props}>{text}</a>
    );
};
