import styles from './Socials.module.scss';
import {socials} from '../../date'
import {ReactComponent as Tw} from './icons/tw.svg';
import {ReactComponent as Inst} from './icons/inst.svg';
import {ReactComponent as Vk} from './icons/vk.svg';
import {ReactComponent as Fb} from './icons/fb.svg';
import cn from 'classnames';

const socialsArray = [<Tw/>, <Inst/>, <Vk/>, <Fb/>];

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
