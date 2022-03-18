import styles from "./App.module.scss";
import {Header} from "../../components";
import {Hero} from "../../pages";
import {useState} from "react";

export const App = ({...props}) => {

    const [start, openApp] = useState(false);

    const handleClick = () => {
        openApp(start => !start);
    }

  return (
    <div className="wrapper" {...props}>
        {!start ? <Hero handle={handleClick}/> : <Header/>}
    </div>
  );
};
