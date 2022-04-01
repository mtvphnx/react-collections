import cn from 'classnames';
import {Link, Socials} from "../../components";
import {authors, collection} from '../../date'
import styles from './Menu.module.scss';

export const Menu = ({className, opened, ...props}) => {
    const generateList = ({id, name}) => {
        return (
            <li className={styles.item} key={id}>
                <Link text={name} tag={'div'} />
            </li>
        )
    }

    const generateAuthors = ({id, role, name}) => {
        return (
            <li key={id} className={styles.author}>
                <span className="text-small">{role}</span>
                <span className={styles.divider} />
                <span className="text-small">{name}</span>
            </li>
        )
    }

    return (
        <div className={cn(styles.menu, className)} {...props}>
            <div className={styles.container}>
                <h3 className={cn('h3', styles.title)}>Коллекция коллекционеров</h3>
                <ul className={styles.list}>
                    {collection && collection.map(item => generateList(item))}
                </ul>
                <div className={styles.footer}>
                    <div className={styles.info}>
                        <div className="text-small">Спецпроект <Link text="2x2.Медиа" url="https://media.2x2tv.ru" target="_blank" className="link text-small"/> © 2022</div>
                        <Socials/>
                    </div>
                    <ul className={styles.authors}>
                        {authors && authors.map(item => generateAuthors(item))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
