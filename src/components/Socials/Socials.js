import cn from 'classnames';
import {socials} from '../../date'
import styles from './Socials.module.scss';
import {ReactComponent as Vk} from './icons/vk.svg';

const socialsArray = [<Vk/>];

export const Socials = ({className, ...props}) => {
    const generateSocials = ({id, link, name}) => {
        return (
            <li className={styles.item} key={id}>
                <a href={link} className={styles.link} target="_blank" rel="nofollow noreferrer">
                    {socialsArray[id]}
                </a>
            </li>
        )
    }
    return (
        <ul className={cn(styles.list, className)} {...props}>
            {socials && socials.map(item => generateSocials(item))}
        </ul>
    );
};
