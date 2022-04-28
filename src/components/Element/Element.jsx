import cn from 'classnames';
import styles from './Element.module.scss';
import icon from '../../resources/pics/pin.png';

export const Element = ({name, link, pin, img, id, style, handler}) => {

    return (
        <div className={cn('element', styles.element)}
             data-link={link}
             onClick={handler}
             style={style}>
            <img src={`/elements/${id}.png`}
                 style={img}
                 alt={name} />
            <img src={icon}
                 style={pin}
                 alt="2x2"
                 className={styles.pin} />
        </div>
    );
};
