import {useState} from 'react';
import {Hero, Canvas} from '../../layouts';
import styles from './App.module.scss';

export const App = ({...props}) => {

    const [start, openApp] = useState(false);

    const onClickHandle = (e) => {
        e.preventDefault();
        openApp(start => !start);
    }

  return (
    <div className="wrapper" {...props}>
        {!start ? <Hero handle={onClickHandle}/> : <Canvas/>}
    </div>
  );
};
