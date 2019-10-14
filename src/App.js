/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    idA: "active",
    idP: "",
    idName: "",
    idDes: "",
    updown: "fa fa-caret-down move"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.pageRoll);

    this.pageRoll();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.pageRoll);
  }
  pageRoll = e => {
    
    if (e) {
      const path = e.composedPath() || e.path;
      if (path[1].pageYOffset > path[1].innerHeight * 2.45) {
        this.setState({ idP: "active", idA: "" });
      } else {
        this.setState({ idA: "active", idP: "" });
      }
      if (path[1].pageYOffset > path[1].innerHeight * 1.51) {
        this.setState({ updown: "fa fa-caret-up" });
      } else {
        this.setState({ updown: "fa fa-caret-down" });
      }
    }
  };

  nextPage = e => {
    this.setState({ idName: "hoverN", idDes: "hoverD" });
  };
  upNdown = e => {
    var y = window.innerHeight;
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (e) {
      if (this.state.updown === "fa fa-caret-down") {
        if(top===0){
          window.scroll(0, y);
        }else if(top===y){
          window.scroll(0, y+y/2);
        }else{
          window.scroll(0, (2*y)+y/2);
        }
        
      } else {
        window.scroll(0, 0);
      }
    }
  };
  render() {
    return (
      <div id="App">
        <div id="background" />

        <div id="page">
          <div id="front">
            <h1 id="personal">Laily Sarvarian</h1>
            <h2 id="title">Web Developer</h2>
          </div>

          <div id="resume">
            <div id="page-next">
               
              <div className="movement">
                <div
                  className={this.state.updown}
                  id="bounce"
                  onClick={e => this.upNdown(e, this)}
                />
              </div>
                    
            </div>
            <div id="page-title">
               
              <div className="movementP">
                <div id={this.state.idA} className="profile">
                  {" "}
                  Profile
                </div>
                <div id={this.state.idP} className="projects">
                  Projects
                </div>
              </div>
                    
            </div>

            <div id="about">
              <div id="summary">
                <h3 id="about-title">About me</h3>           
                <p>
                  I am a self-motivated analytically-minded 
                  developer with a passion for front-end 
                  development. I can work well indepedently 
                  or in a team and specialize in building fluid
                  apps with React, Redux and Javascript.
                </p>
              </div>
              <div id="picture">
                <div className="pic" />
              </div>
              <div id="skills">
                <h3 className="about-skills">Skills</h3>
                <div className="skills-container">
                  <div>React</div>
                  <div>Redux</div>
                  <div>Javascript</div>
                  <div>JQuery</div>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>NodeJs</div>
                  <div>Bootstrap</div>
                  <div>Solidity</div>
                  <div>Photoshop</div>
                </div>
              </div>
            </div>
            <div id="work">
              <div id="scroll">
              <i className="fas fa-long-arrow-alt-left"></i>
                Scroll
              <i className="fas fa-long-arrow-alt-right"></i>
              </div>
              <div id="inside">
              <div className="work-container">
                <div id="first" className="project">
                  <div className="firsta a">Tetris</div>
                  <div className="firstb b">
                <div id="tetris">
                This is a Javascript 
                version ofthe famous Tetris 
                game. The gamestarts by pressing
                the play buttonwhich triggers a timer.
                The game continues until the stack of
                pieces reaches the top of the playing
                field and no new piece
                can enter.
                 <a   id="app-tetris" className="fa fa-caret-down bounce"
                      href="https://tetris-26f9b.firebaseapp.com">
                    </a>
                </div>
                  

   

                  </div>
                </div>
                <div id="second" className="project">
                  <div className="seconda a">2Shop</div>
                  <div className="secondb b">
                  <div id="shop">
                  This is a custom component I
                  wrote for a dynamic list which
                  the user can add and remove
                  items from
                 <a   id="app-shop" className="fa fa-caret-down bounce"
                      href="https://shop-a1e0f.firebaseapp.com">
                    </a>
                </div>
                  </div>
                </div>
                <div id="third" className="project">
                  <div className="thirda a">
                    <div className="three-dots">
                      <div className="dbounce ">.</div>
                      <div className="dbounce ">.</div>
                      <div className="dbounce ">.</div>
                    </div>
                  </div>
                  <div className="thirdb b"></div>
                </div>
                <div id="forth" className="project">
                  <div className="fortha a">
                    <div className="three-dots">
                      <div className="dbounce ">.</div>
                      <div className="dbounce ">.</div>
                      <div className="dbounce ">.</div>
                    </div>
                  </div>
                  <div className="forthb b"></div>
                </div>
              </div>
              </div>
            </div>

            <div id="footer">
              <div className="row1">
                <a
                  className="fab fa-linkedin-in link"
                  href="https://www.linkedin.com/in/lailysarvarian/"
                />
                <a
                  className="fab fa-github link"
                  href="https://github.com/lailys"
                />
                <a
                  className="fab fa-codepen link"
                  href="https://codepen.io/lailys165"
                />
                <a
                  className="fa fa-envelope link"
                  href="mailto:laily@lailys.com"
                />
              </div>
              <div className="row2">
                © Laily Sarvarian 2019 All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
