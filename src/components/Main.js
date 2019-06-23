import React from 'react'
import Emitter from '../services/emitter';

import '../styles/Main.css';

class Main extends React.Component {
    state = { inputValue: '' };
    
    handleOnClick = e => {
        Emitter.emit('INPUT_FROM_MAIN', this.state.inputValue);
    }
    
    render() {
        return (
            <div className="main">
                <h3>Main content</h3>
                <input type="text" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} />
                <input type="button" value="Send to other components" onClick={this.handleOnClick} />
            </div>
        )
    } 
}

export default Main