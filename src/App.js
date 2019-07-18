import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    idA: "active",
    idP: ""
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
              <div class="projects">
                <div className="first project">
                  <div className="name first-name ">2SHOP</div>
                  <div className="description first-description">
                    This is an in progress project
                  </div>
                </div>
                <div className="second project">
                  <div className="name  ">
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
                  <div className="name  " >
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
                <div className="forth project">
                  <div className="name  " >
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
