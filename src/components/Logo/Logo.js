import styles from './Logo.module.scss';
import icon from './logo.svg';
import cn from 'classnames';

export const Logo = ({className, ...props}) => {
    return (
        <img src={icon} className= {cn(styles.logo, className)} alt="logo" {...props}/>
    );
};
