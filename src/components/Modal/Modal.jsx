import {useEffect} from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Modal = ({visible = false, onClose, type, className, children, ...props}) => {
    const onKeyDown = ({key}) => {
        if (key === 'Escape') onClose();
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    })

    if (!visible) return null;

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.dialog} onClick={e => e.stopPropagation()}>
                <PerfectScrollbar>
                    <div className={styles.body}>
                        <div className={cn(styles.content, type === 'second' ? styles.second : null)}>
                            {children}
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        </div>
    );
};
