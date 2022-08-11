import styles from './Burger.module.scss';
import cn from 'classnames';
import burger from '../../resources/icons/burger.svg';
import close from '../../resources/icons/close.svg';

export const Burger = ({opened, handler}) => {
    return (
        <div className={cn(styles.burger, opened ? styles.fixed : '')} onClick={handler}>
            <img src={!opened ? burger : close} alt="Меню"/>
        </div>
    );
};
