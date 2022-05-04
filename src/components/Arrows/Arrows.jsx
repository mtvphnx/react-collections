import cn from 'classnames';
import styles from './Arrows.module.scss';

export const Arrows = ({handlerClick}) => {
    const data = ['top', 'right', 'left', 'bottom'];
    const elements = data.map(position => {
        return <div onClick={handlerClick} data-arrow={position} className={cn(styles.arrow, `on-${position}`)}></div>
    })

    return (
        <div className={styles.arrows}>
            {elements}
        </div>
    )
}