import {Component} from 'react';
import {Hero, Canvas} from '../../components';

export class App extends Component {
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
                {start ? <Hero handler={this.onClickStart}/> : <Canvas/>}
            </div>
        );
    }
};
