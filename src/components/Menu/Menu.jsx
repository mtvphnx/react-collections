import cn from 'classnames';
import {Link, Socials} from "../../components";
import collection from '../../data/collection'
import styles from './Menu.module.scss';

export const Menu = ({handler, opened, toggleState, getArticle}) => {

    const authors = [
        {id: 0, role: 'Текст и идея', name: 'Наташа Лобачёва'},
        {id: 1, role: 'Иллюстратор', name: 'Анастасия Dorisovala'},
        {id: 2, role: 'Дизайн', name: 'Артём Сизов'},
        {id: 3, role: 'Художница', name: 'Маргарита Правосудова'},
        {id: 4, role: 'Художница', name: 'Евгения Лазарева'},
        {id: 5, role: 'Разработка', name: 'Матвей Феникс'}
    ];

    const clickHandler = (link, modal, close) => {
        toggleState(close);
        getArticle(link, 'first')
    }

    const collectionslist = collection.map(item => {
        const {id, name, link} = item;

        return (
            <li className={styles.item} key={id}>
                <Link text={name} tag={'div'} className='nav' data-link={link} onClick={() => clickHandler(link, 'first', 'menu')} />
            </li>
        )
    })

    const autorsList = authors.map(item => {
        const {id, role, name} = item;

        return (
            <li key={id} className={styles.author}>
                <span className="text-small">{role}</span>
                <span className={styles.divider} />
                <span className="text-small">{name}</span>
            </li>
        )
    })

    const media = <Link text="2x2.Медиа" url="https://media.2x2tv.ru" target="_blank" className="link text-small"/>

    return (
        <div className={styles.menu} style={opened ? {display: 'block'}: {display: 'none'}} onClick={handler}>
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                <h3 className={cn('h3', styles.title)}>Коллекция коллекционеров</h3>
                <ul className={styles.list}>
                    {collectionslist}
                </ul>
                <div className={styles.footer}>
                    <div className={styles.info}>
                        <div className={cn("text-small", styles.copyright)}>Спецпроект {media} © 2022</div>
                        <Socials className={styles.socials}/>
                    </div>
                    <ul className={styles.authors}>
                        {autorsList}
                    </ul>
                </div>
            </div>
        </div>
    );
};
