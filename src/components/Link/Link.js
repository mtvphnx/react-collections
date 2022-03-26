import cn from 'classnames';
import styles from './Link.module.scss';

export const Link = ({url, text, ...props}) => {
    return (
        <a href={url} className={cn('link', styles.link)} {...props}>{text}</a>
    );
};
