import {useEffect} from 'react';
import cn from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import {useMediaQuery} from 'react-responsive';
import {Logo} from '../../components';
import styles from './Modal.module.scss';

export const Modal = ({onClose, type, className, children}) => {
    const onKeyDown = ({key}) => {
        if (key === 'Escape') onClose();
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    });


    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const desktop = (
        <Scrollbars renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}>
            <div className={styles.body}>
                <div className={cn(styles.content, type === 'second' ? styles.second : null)}>
                    {children}
                </div>
            </div>
        </Scrollbars>
    );

    const mobile = (
        <div className={styles.body}>
            <div className={cn(styles.content, type === 'second' ? styles.second : null)}>
                <Logo color={'dark'} className={styles.mobileLogo}/>
                {children}
            </div>
        </div>
    );

    return (
        <div className={styles.modal}
             onClick={onClose}>
            <div className={cn(styles.dialog, type === 'second' ? styles.second : null)} onClick={e => e.stopPropagation()}>
                {!isMobile ? desktop : mobile}
            </div>
        </div>
    );
};
