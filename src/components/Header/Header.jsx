import cn from 'classnames';
import {Logo, Burger, Menu} from '../../components';
import styles from './Header.module.scss';

export const Header = ({opened, text, handler, toggleState, getArticle}) => {

    return (
        <header className={styles.header} 
                id="header">
            <Logo className={styles.logo} />
            <div className={cn('text-body', styles.title)}>{text}</div>
            <Burger handler={handler}
                    opened={opened}/>
            <Menu handler={handler}
                  opened={opened}
                  toggleState={toggleState}
                  getArticle={getArticle}/>
        </header>
    );
};
