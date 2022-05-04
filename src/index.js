import React from 'react';
import ReactDOM from 'react-dom';
import {Hero, App} from './components';
import './styles/reset.scss';
import './styles/global.scss';

export class Collection extends React.Component {
    state = {
        start: true
    }

    onClickStart = () => {
        this.setState(({start}) => ({
            start: !start
        }));
    };

    render() {
        const {start} = this.state;

        return (
            <div className="wrapper">
                {start ? <Hero handler={this.onClickStart}/> : <App/>}
            </div>
        );
    }
};


ReactDOM.render(
  <React.StrictMode>
    <Collection/>
  </React.StrictMode>,
  document.getElementById('root')
);
