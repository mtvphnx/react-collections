import styles from './Logo.module.scss';
import icon from './icons/logo.svg';
import cn from 'classnames';

export const Logo = ({className, color, ...props}) => {
    return (
        <img src={icon}
             className={cn(styles.logo, className)}
             alt="logo"
             style={(color === 'dark' ? {filter: 'invert(1)'} : {filter: 'invert(0)'})}
             {...props}
        />
    );
};
