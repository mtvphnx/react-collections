import React from 'react';
import styles from './Modal.module.scss';
import cn from 'classnames';

export const Modal = ({visible = false, onClose, type = 'little', className, children, ...props}) => {
    const onKeyDown = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose()
                break;
        }
    }

    React.useEffect(() => {
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
