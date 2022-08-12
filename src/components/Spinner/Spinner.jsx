import cn from 'classnames';
import styles from './Spinner.module.scss';
import spinner from '../../resources/icons/spinner.svg';

export const Spinner = ({className}) => {
    return (
        <div className={cn(styles.spinner, className)}>
            <img src={spinner} alt="Загрузка"/>
        </div>
    )
}