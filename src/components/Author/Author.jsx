import cn from 'classnames';
import {Link} from '../../components';
import styles from './Author.module.scss';
import icon from '../../resources/pics/author.jpg';

export const Author = ({handler}) => {
    const info = [
        {id: 0,text: 'Я сижу перед пустым стеллажом — раньше он был полностью заставлен фигурками, а теперь на нём коллекционируется пыль.'},
        {id: 1,text: 'Я выкручиваю тряпку и сметаю это собрание мелких частиц. Ставлю коллекционного киднеровского крота. Первое, что я чувствую, — цунами из ностальгии.'},
        {id: 2, text: 'Меня переносит в детство, где я за полсекунды распаковываю киндер и открываю пластиковый желток. Определённо стоит снова собирать игрушки. Почему я перестала? Сейчас вообще кто-нибудь коллекционирует? Зачем заставлять полку одинаковыми фигурками и мониторить ночами редкие экземпляры во времена, когда мы пытаемся вылезти из вещевых завалов?'},
        {id: 3, text: 'Кажется, целью может быть всё что угодно. И для получения всех возможных ответов только один путь — собрать коллекцию коллекционеров.'},
        {id: 4, text: 'Мы поговорили с молодыми собирателями, как коллекциони-рование можно конвертировать в медитацию и почему в 2022 году особенно важно иметь что-то, что можно «пощупать».'},
        {id: 5, text: 'Больше двух тысяч предметов в коллекциях. Жёлтые резиновые утки, водка и фигурки Warhammer — добро пожаловать на полку современных коллекций.'}
    ];

    const text = info.map(item => {
        const {id, text} = item;

        const little = <p key={id} className={cn('text-small', styles.little)}>{text}</p>,
            big = <p key={id} className={cn('text-body', styles.big)}>{text}</p>;

        return (id < 2) ? big : little;
    });

    return (
        <div className={styles.modal}>
            <div className={styles.author}>
                <img src={icon} alt="Наталья Лобачёва"/>
                <div className={styles.text}>
                    <div className={styles.name}>Наташа Лобачёва</div>
                    <div className={cn(styles.name, styles.role)}>Автор проекта</div>
                </div>
            </div>
            {text}
            <Link tag={'div'} text="Смотреть коллекцию" onClick={handler}/>
        </div>
    );
};
