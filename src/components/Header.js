import React from 'react'
import Emitter from '../services/emitter';

import '../styles/Header.css';

class Header extends React.Component {
    state = { header: 'Default header' };

    componentDidMount() {
        Emitter.once('INPUT_FROM_MAIN', (newValue) => this.setState({ header: newValue }));
    }

    componentWillUnmount() {
        Emitter.off('INPUT_FROM_MAIN');
    }

    render() {
        return (
            <header className="header">
                <h1>{this.state.header}</h1>
                <div>Header listens only to the first occurrence new input.</div>
            </header>
        )
    }
}

export default Header