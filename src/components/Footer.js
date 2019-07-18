import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row1">

                    <a href="https://www.linkedin.com/in/lailysarvarian/" className="fa fa-linkedin link"/>

                    <a href="https://github.com/lailys" className="fa fa-github link"/>

                    <a href="https://codepen.io/lailys165" className="fa fa-codepen link" />

                    <a href="mailto:laily@lailys.com" className="fa fa-envelope-o link" />

                </div>
                <div className="row2">© Laily Sarvarian 2019 
All Rights Reserved.</div>

            </div>
        );
    }
}

export default Footer;