import styles from './Burger.module.scss';
import openIcon from './burger.svg';
import closeIcon from './close-burger.svg';

export const Burger = ({opened, ...props}) => {
    return (
        <div className={styles.burger} {...props}>
            <img src={!opened ? openIcon : closeIcon} alt="Меню"/>
        </div>
    );
};
