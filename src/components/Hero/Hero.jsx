import {Logo, Socials, Link, Author} from '../../components'
import {useMediaQuery} from 'react-responsive';
import cn from 'classnames';
import styles from './Hero.module.scss';
import pic from '../../resources/pics/hero.jpg';

export const Hero = ({handler}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    return (
        <div className={styles.hero}>
            <div className={styles.hero}>
                <div className={styles.info}>
                    <div className={styles.header}>
                        <Logo color={'dark'}/>
                        <Socials/>
                    </div>
                    <div className={styles.content}>
                        <div className={cn(styles.title, 'h1')}>Коллекция коллекционеров</div>
                        <p className={cn(styles.paragraph, 'text-body')}>Как люди переедают Pringles ради коллекции, а желание «попищать уткой» объединяет поколения? Как глюкофилы перевозят по 10 кг сахара из города в город и оправдываются на досмотре? И главное — почему люди продолжают коллекционировать в моду на минимализм?</p>
                        {!isMobile ? <Link tag={'div'} text={'Читать далее'} onClick={handler} /> : null}
                        {isMobile ? <Author handler={handler}/> : null}
                    </div>
                </div>
                <div className={styles.pic}>
                    <img src={pic} alt='Коллекция коллекционеров'/>
                </div>
            </div>
        </div>
    );
};
