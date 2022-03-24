import styles from "./App.module.scss";
import {Hero, Canvas} from "../../layouts";
import {useState} from "react";

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
