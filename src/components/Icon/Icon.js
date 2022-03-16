import styles from './Icon.module.scss';

export const Icon = ({name, icon}) => {
    return (
        <img src={icon} alt={name}/>
    );
};
