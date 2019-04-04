import React, { Component } from 'react';

class Header extends Component {

    state={
top:0,
    }

    render() {
        return (
            <div className="header" style={{top:this.state.top}}>
                <a className="li logo">LailyS</a>
                <a className="li about"> About</a>
                <a className="li work"> Work</a>
            </div>
        );
    }
}

export default Header;