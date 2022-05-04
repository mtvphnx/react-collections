import cn from 'classnames';
import styles from './Arrows.module.scss';

export const Arrows = ({handlerClick}) => {
    return (
        <div className={styles.arrows}>
            <div onClick={handlerClick} data-arrow="top"  className={cn(styles.arrow, 'on-top')}></div>
            <div onClick={handlerClick} data-arrow="right" className={cn(styles.arrow, 'on-right')}></div>
            <div onClick={handlerClick} data-arrow="left" className={cn(styles.arrow, 'on-left')}></div>
            <div onClick={handlerClick} data-arrow="bottom" className={cn(styles.arrow, 'on-bottom')}></div>
        </div>
    )
}