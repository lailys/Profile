/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    idA: "active",
    idP: "",
    idName:"",
    idDes:""
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    this.handleScroll();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = e => {
    if (e) {
      const path=e.composedPath() || e.path
        if (path[1].pageYOffset> path[1].innerHeight * 2.45) {
          this.setState({ idP: "active", idA: "" });
        } else {
          this.setState({ idA: "active", idP: "" });
        }
   

 

   
    }
  };
  nextPage = e => {
    this.setState({ idName: "hoverN", idDes: "hoverD" });
  };
  render() {
    return (
      <div className="App">
        <div className="background" />
        <div className="page">
          <div id="front">
            <div className="part-front">
              <div className="me-name">
                <h1>Laily Sarvarian</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
            <div id="me-next">
              <div
                className="fa fa-caret-down bounce"
                style={{ fontSize: "400%", color: "rgb(3, 194, 178)" }}
              />
            </div>
          </div>

          <div className="resume">
            <div id="nav-zone">
              <ul id="navbar">
                <li>
                  <div id={this.state.idA} className="classA">
                    Profile
                  </div>
                </li>
                <li>
                  <div id={this.state.idP} className="classP">
                    Projects
                  </div>
                </li>
              </ul>
            </div>
            <div id="about">
              <h3 className="about-title">About me</h3>

              <p className="about-content ">
                I am a self-motivated analytically-minded developer with a
                passion for front-end development. I can work well indepedently
                or in a team and specialize in building fluid apps with React,
                Redux and Javascript.
              </p>

              <div className="about-pic">
                <div className="pic" />
              </div>

              <h3 className="about-skills">Skills</h3>
              <div className="skills">
                <div id="expertise">
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                  <div className="skill">Javascript</div>
                  <div className="skill">React</div>
                  <div className="skill">Redux</div>
                  <div className="skill">Node</div>
                  <div className="skill">Bootstrap</div>
                  <div className="skill">Solidity</div>
                </div>
              </div>
            </div>

            <div id="work">
              <div className="projects">
                <div 
                
                className="first project">
                 
                  <div 
                  onClick={this.nextPage}
                  id={this.state.idName}
                  className="name first-name ">2SHOP</div>
                  <div 
                   id={this.state.idDes}
                  className="description first-description">
                  This is a simple one page App to make a shopping list. This project is in progress.

                    <a
                    id="app"
                className="fa fa-caret-down bounce"
                href="https://my2shoplist.herokuapp.com/"
                style={{ fontSize: "200%" }}
              />
                  </div>
                
       
                </div>
                <div className="second project">
                  <div 
                  onClick={this.nextPage}
                  className="name  ">
                  <div className="dots">
                      <div id="a" className="dbounce">
                        .
                      </div>
                      <div id="b" className="dbounce">
                        .
                      </div>
                      <div id="c" className="dbounce">
                        .
                      </div>
                    </div>
</div>
                  <div className="description " />
                </div>
                <div className="third project">
                  
                  <div 
                  onClick={this.nextPage}
                  className="name  " >
                  <div className="dots">
                      <div id="a" className="dbounce">
                        .
                      </div>
                      <div id="b" className="dbounce">
                        .
                      </div>
                      <div id="c" className="dbounce">
                        .
                      </div>
                    </div>
</div>
                  <div className="description " />
                </div>
                <div className="forth project"
                onClick={e=>this.nextPage(e)}>
                  <div 
                  
                  className="name  " >
                  <div className="dots">
                      <div id="a" className="dbounce">
                        .
                      </div>
                      <div id="b" className="dbounce">
                        .
                      </div>
                      <div id="c" className="dbounce">
                        .
                      </div>
                    </div>
</div>
                  <div className="description " />
                </div>
              </div>
            </div>
            <div id="contact">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
