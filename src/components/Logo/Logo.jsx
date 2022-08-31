import cn from 'classnames';
import styles from './Logo.module.scss';
import icon from '../../resources/icons/logo.svg';

export const Logo = ({className, color}) => {
    return (
        <a href="/collections/" className={cn(styles.link, className)}>
            <img src={icon}
                 className={styles.logo}
                 alt="logo"
                 style={(color === 'dark' ? {filter: 'invert(1)'} : {filter: 'invert(0)'})}
            />
        </a>
    );
};
