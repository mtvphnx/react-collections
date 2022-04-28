import cn from 'classnames';
import styles from './Link.module.scss';

export const Link = ({url, tag = 'a', text, className, ...props}) => {
    const CustomTag = tag;

    return (
        <CustomTag className={cn('link', styles.link, className)} href={url} {...props}>{text}</CustomTag>
    );
};
