import styles from './Spinner.module.scss';
import spinner from '../../resources/icons/spinner.svg';

export const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <img src={spinner} alt="Загрузка"/>
        </div>
    )
}