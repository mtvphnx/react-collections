import {Logo, Socials, Link} from '../../components'
import cn from 'classnames';
import styles from './Hero.module.scss';
import pic from './icons/hero.jpg';

export const Hero = ({handle, ...props}) => {
    return (
        <div className={styles.hero} {...props}>
            <div className={styles.hero}>
                <div className={styles.info}>
                    <div className={styles.header}>
                        <Logo color={'dark'}/>
                        <Socials/>
                    </div>
                    <div className={styles.content}>
                        <div className={cn(styles.title, 'h1')}>Коллекция коллекционеров</div>
                        <p className={cn(styles.paragraph, 'text-body')}>Как люди переедают Pringles ради коллекции, а желание «попищать уткой» объединяет поколения? Как глюкофилы перевозят по 10 кг сахара из города в город и оправдываются на досмотре? И главное — почему люди продолжают коллекционировать в моду на минимализм?</p>
                        <Link tag={'div'} text={'Читать далее'} onClick={handle} />
                    </div>
                </div>
                <div className={styles.pic}>
                    <img src={pic} alt='Коллекция коллекционеров'/>
                </div>
            </div>
        </div>
    );
};
