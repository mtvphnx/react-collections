import styles from './Author.module.scss';
import icon from './icons/author.jpg';
import cn from 'classnames';

export const Author = ({...props}) => {
    return (
        <div className={styles.author} {...props}>
            <img src={icon} alt="Наталья Лобачёва"/>
            <div className={styles.text}>
                <div className={styles.name}>Наташа Лобачёва</div>
                <div className={cn(styles.name, styles.role)}>Автор проекта</div>
            </div>
        </div>
    );
};
