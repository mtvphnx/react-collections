import cn from 'classnames';
import {Logo, Burger, Menu} from '../../components';
import styles from './Header.module.scss';

export const Header = ({opened, handler, toggleState, getArticle}) => {

    return (
        <header className={styles.header} 
                id="header">
            <Logo className={styles.logo} />
            <div className={cn('text-body', styles.title)}>Коллекция коллекционеров</div>
            <Burger handler={handler}
                    opened={opened}/>
            <Menu handler={handler}
                  opened={opened}
                  toggleState={toggleState}
                  getArticle={getArticle}/>
        </header>
    );
};
