import {useEffect} from 'react';
import cn from 'classnames';
import Scroll from 'react-scrollbar';
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
        <Scroll smoothScrolling={true}>
            <div className={styles.body}>
                <div className={cn(styles.content, type === 'second' ? styles.second : null)}>
                    {children}
                </div>
            </div>
        </Scroll>
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
            <div className={styles.dialog} onClick={e => e.stopPropagation()}>
                {!isMobile ? desktop : mobile}
            </div>
        </div>
    );
};
