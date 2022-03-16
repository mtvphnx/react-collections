import styles from './Menu.module.scss';
import {Link} from "../Link/Link";
import {authors, collection} from '../../date'
import cn from 'classnames';

export const Menu = ({className, opened, ...props}) => {
    const generateList = ({id, name}) => {
        return (
            <li className={styles.item} key={id}>
                <Link text={name} url={'#'} />
            </li>
        )
    }

    const generateAuthors = ({id, role, name}) => {
        return (
            <li key={id} className={styles.author}>
                <span>{role}</span>
                <span>{name}</span>
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

                    </div>
                    <ul className={styles.authors}>
                        {authors && authors.map(item => generateAuthors(item))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
