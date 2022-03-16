import {useState} from 'react';
import {Logo, Burger, Menu} from "../../components";
import styles from './Header.module.scss';
import cn from 'classnames';

export const Header = () => {
    const [opened, toggleMenu] = useState(false);

    const handleClick = () => {
        toggleMenu(opened => !opened);
    }

    return (
        <header className={styles.header}>
            <Logo className={styles.logo} />
            <div className={cn('text-body', styles.title)}>Коллекция коллекционеров</div>
            <Burger onClick={handleClick} opened={opened}/>
            <Menu style={opened ? {display: 'block'}: {display: 'none'}}/>
        </header>
    );
};