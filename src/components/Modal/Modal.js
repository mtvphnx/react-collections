import {useEffect} from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';

export const Modal = ({visible = false, onClose, type = 'little', className, children, ...props}) => {
    const onKeyDown = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose()
                break;
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    })

    if (!visible) return null;

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.dialog} onClick={e => e.stopPropagation()}>
                <div className={styles.body}>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
