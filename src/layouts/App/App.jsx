import {useState} from 'react';
import {Hero, Canvas} from '../../layouts';

export const App = ({...props}) => {

    const [start, openApp] = useState(false);

    const onClickHandle = () => openApp(start => !start);

  return (
    <div className="wrapper" {...props}>
        {!start ? <Hero handle={onClickHandle}/> : <Canvas/>}
    </div>
  );
};
