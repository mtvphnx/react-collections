import styles from "./App.module.scss";
import {Hero, Canvas} from "../../layouts";
import {useState} from "react";

export const App = ({...props}) => {

    const [start, openApp] = useState(false);

    const handleClick = () => {
        openApp(start => !start);
    }

  return (
    <div className="wrapper" {...props}>
        {!start ? <Hero handle={handleClick}/> : <Canvas/>}
    </div>
  );
};
