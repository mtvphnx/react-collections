import {Component, useEffect, useRef} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {useMediaQuery} from 'react-responsive';
import {Element, Article, Arrows} from '../../components';
import styles from './Content.module.scss';
import collection from '../../data/collection';

export const Content = ({click, first, content, getArticle, hide}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let scrollRef = useRef();

    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const elements = collection && collection.map(item => {
        const {id, link, ...props} = item;
        return (
            <Element handler={() => getArticle(link, 'first')} key={id} id={id} link={link} {...props}/>
        );
    })

    const desktop = <Scrollbars renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                                renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                                ref={scrollRef} className="canvas-wrapper"><Wrapper scrollRef={scrollRef.current} children={elements} />
                    </Scrollbars>,
        mobile = <Wrapper children={elements} />

    return (
        <>
            {isMobile ? mobile : desktop}
            {first ? <Article hide={hide ? 'hide': ''} content={content} handler={click}/> : null}
        </>
    );
}

class Wrapper extends Component {
    moveLayout = (e) => {
        const currentArrow = e.currentTarget.getAttribute('data-arrow');
        let position;
        switch (currentArrow) {
            case 'top':
                position = {
                    top: 0,
                    behavior: 'smooth'
                };
                break;
            case 'right':
                position = {
                    left: this.props.scrollRef.view.clientWidth,
                    behavior: 'smooth'
                };
                break;
            case 'left':
                position = {
                    left: 0,
                    behavior: 'smooth'
                };
                break;
            case 'bottom':
                position = {
                    top: this.props.scrollRef.view.clientHeight,
                    behavior: 'smooth'
                };
                break;
            default:
                break;
        }
        this.props.scrollRef.view.scroll(position)
    }

    render(){
        return (
            <>
            <div className={styles.block}>
                <div className={styles.wrapper}>
                    <div className={styles.bg}/>
                    {this.props.children}
                </div>
            </div>
            <Arrows handlerClick={(e) => this.moveLayout(e)}/>
            </>
        );
    }
}