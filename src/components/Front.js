import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import Hpic1 from './Hpic1.jpg'
import Hpic2 from './Hpic1.jpg'
import Hpic3 from './Hpic1.jpg'

class Front extends Component {


  
    render() {
        return (
            <div className="front" >
                <div className="parts a">
                <div className="title" >
               
                <div className="title-a">Web</div>
                <div className="title-b">de</div>
                <div className="title-c">V</div>
                <div className="title-d">eloper</div>
               </div>
                </div>
               
                <div className="parts b">
                <div className="content">
                <span className="about-title">About Me:<br/><br/></span>
                <br/><br/>
               
                <span className="about-note">I'm an entry level designer/developer based in Bayarea. I have a passion for desining Web/App and develop application.
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <span style={{fontSize:"120%",fontWeight:"bold", marginLeft:"40%"}}>skills:</span>
                <br/>
                
                <br/>
                CSS, Javascript, React, Redux, Bootstrap...
                </span>
                </div>
                </div>
    ]
                <div className="parts c">
              <div className="card shopping">
              <a className="project-name" href="https://codepen.io/lailys165">Project:<br/>"Shopping List"</a>
              </div>
                <div className="card-shadow"></div>
                
                </div>
            </div>
        );
    }
}

export default Front;