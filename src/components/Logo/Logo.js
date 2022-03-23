import styles from './Logo.module.scss';
import icon from './icons/logo.svg';
import cn from 'classnames';

export const Logo = ({className, color, ...props}) => {
    return (
        <a href="/" className={cn(styles.link, className)}>
            <img src={icon}
                 className={styles.logo}
                 alt="logo"
                 style={(color === 'dark' ? {filter: 'invert(1)'} : {filter: 'invert(0)'})}
                 {...props}
            />
        </a>
    );
};
