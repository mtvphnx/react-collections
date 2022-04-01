import {useState} from 'react';
import cn from 'classnames';
import {Logo, Burger, Menu} from '../../components';
import styles from './Header.module.scss';

export const Header = () => {
    const [opened, toggleMenu] = useState(false);

    const onClickHandle = () => {
        toggleMenu(opened => !opened);
    }

    return (
        <header className={styles.header} id="header">
            <Logo className={styles.logo} />
            <div className={cn('text-body', styles.title)}>Коллекция коллекционеров</div>
            <Burger onClick={onClickHandle} opened={opened}/>
            <Menu style={opened ? {display: 'block'}: {display: 'none'}}/>
        </header>
    );
};
