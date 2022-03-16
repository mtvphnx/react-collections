import styles from './App.module.scss';
import {Header} from "../Header/Header";

export const App = ({...props}) => {
  return (
    <div className="wrapper" {...props}>
      <Header/>
      <div>Приложение</div>
    </div>
  );
};
