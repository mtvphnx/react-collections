import styles from './Logo.module.scss';
import icon from './logo.svg';
import darkIcon from './dark-logo.svg';
import cn from 'classnames';

export const Logo = ({className, color, ...props}) => {
    return (
        <img src={color === 'light' ? icon : darkIcon} className= {cn(styles.logo, className)} alt="logo" {...props}/>
    );
};
