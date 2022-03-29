import cn from 'classnames';
import {socials} from '../../date'
import styles from './Socials.module.scss';
import {ReactComponent as Vk} from './icons/vk.svg';
import {ReactComponent as Telegram} from './icons/tg.svg';
import {ReactComponent as Odnoklassniki} from './icons/ok.svg';
import {ReactComponent as Youtube} from './icons/yb.svg';

const socialsArray = [<Vk/>, <Telegram/>, <Odnoklassniki/>, <Youtube/>];

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
