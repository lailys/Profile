import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className="row1">

            <a className="linkedin"  href="https://www.linkedin.com/in/lailysarvarian/">
               @linkedin
                </a>
                <a className="github"    href="https://github.com/lailys">
                @github
                </a>
                <a className="codepen "  href="https://codepen.io/lailys165">
                @codepen
                </a>
                <a className="email " href="mailto:laily@lailys.com">
                @Email
                </a>
            </div>
              
                <p className="row2">© 2019 Laily Sarvarian. All rights reserved.</p>
            </div>
        );
    }
}

export default Footer;