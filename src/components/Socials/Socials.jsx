import cn from 'classnames';
import styles from './Socials.module.scss';

import {ReactComponent as Vk} from '../../resources/icons/vk.svg';
import {ReactComponent as Telegram} from '../../resources/icons/tg.svg';
import {ReactComponent as Odnoklassniki} from '../../resources/icons/ok.svg';
import {ReactComponent as Youtube} from '../../resources/icons/yb.svg';

const socials = [
    {id: 0, link: 'https://vk.com/2x2tv'},
    {id: 1, link: 'https://t.me/telekanal2x2'},
    {id: 2, link: 'https://ok.ru/2x2tv'},
    {id: 3, link: 'https://www.youtube.com/channel/UCvzmS3AOvRtSfTBnS7USVOA'},
];

const socialsArray = [<Vk/>, <Telegram/>, <Odnoklassniki/>, <Youtube/>];

export const Socials = ({className, data, ...props}) => {
    const sharing = data;
    const currentArray = !data ? socials : sharing;

    const list = currentArray.map(item => {
        const {id, link} = item;

        return (
            <li className={styles.item} key={id}>
                <a href={link} className={styles.link} target="_blank" rel="nofollow noreferrer">
                    {socialsArray[id]}
                </a>
            </li>
        )
    });

    return (
        <ul className={cn(styles.list, className)} {...props}>
            {list}
        </ul>
    );
};
