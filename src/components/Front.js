import React, { Component } from 'react';

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
                        <span className="about-title">About Me:<br /><br /></span>
                        <br /><br />

                        <span className="about-note">I am a self-motivated analytically-minded developer with a passion for front-end development. I can work well indepedently or in a team and specialize in building fluid apps with React, Redux and Javascript.
     
                
                </span>
                    </div>
                </div>
                ]
                <div className="parts c">
                    <div className="card shopping">
                        <a className="project-name" href="https://list2shop.herokuapp.com/">"Shopping List"<br /><div style={{fontSize:"1vw"}}>(in progress)</div></a>
                    </div>
                    <div className="card-shadow"></div>

                </div>
            </div>
        );
    }
}

export default Front;