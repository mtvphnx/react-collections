import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import styles from './Element.module.scss';
import icon from '../../resources/pics/pin.png';

export const Element = ({name, link, pin, shadow, id, style, handler, mobile}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 720px)` });

    return (
        <div className={cn('element', styles.element)}
             data-link={link}
             onClick={handler}
             style={!isMobile ? style : mobile.style}>
            <img src={`/elements/${id}.png`}
                 style={!isMobile ? shadow : mobile.shadow}
                 alt={name} />
            <img src={icon}
                 style={!isMobile ? pin : mobile.pin}
                 alt="2x2"
                 className={styles.pin} />
        </div>
    );
};
