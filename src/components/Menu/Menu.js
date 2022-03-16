import styles from './Menu.module.scss';
import cn from 'classnames';

export const Menu = ({className, ...props}) => {
    return (
        <div className={cn(styles.menu, className)} {...props}>Меню</div>
    );
};
