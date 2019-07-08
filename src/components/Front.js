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
                        <a  href="https://list2shop.herokuapp.com/" className="card-content">
                           <div className="project-name">"2Shop"</div> 
                        
                           <div id="card-explenation" >
                           2Shop is a mobile one-page app to help users create a quick shopping list. It supports creating a new list by tapping and entering items, deleting items via a custom swipe interaction (which I wrote the component for), and marking items as done by tapping the tick next to the item. <br/>   (in progress)                     </div>
                            </a>
               
                    </div>
                    <div className="card-shadow"></div>

                </div>
            </div>
        );
    }
}

export default Front;