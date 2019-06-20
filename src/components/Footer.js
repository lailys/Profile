import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className="row1">

            <a id="linkedin"  href="https://www.linkedin.com/in/lailysarvarian/" className="fa fa-linkedin">
                
            </a>
       
     
                <a id="github"    href="https://github.com/lailys" className="fa fa-github"/>
              
        
                <a id="codepen "  href="https://codepen.io/lailys165" className="fa fa-codepen"/>
              
                <a id="email " href="mailto:laily@lailys.com"className="fa fa-envelope-o"/>
               
            </div>
              
                <p className="row2">© 2019 Laily Sarvarian. All rights reserved.</p>
            </div>
        );
    }
}

export default Footer;