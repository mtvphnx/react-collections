import styles from './Socials.module.scss';
import {socials} from '../../date'
import cn from 'classnames';
import {Icon} from "../Icon/Icon";

export const Socials = ({className, ...props}) => {
    const generateSocials = ({id, link, icon, name}) => {
        return (
            <li className={styles.item} key={id}>
                <a href={link} target="_blank" rel="nofollow noreferrer">
                    <Icon src={icon} name={name}/>
                </a>
            </li>
        )
    }
    return (
        <ul className={cn(styles.list, className)}>
            {socials && socials.map(item => generateSocials(item))}
        </ul>
    );
};
