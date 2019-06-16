import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Front from './components/Front'
import Footer from './components/Footer'
import * as Waypoint from 'react-waypoint'




class App extends Component {

  state={
    top:'0',
    endTop:'-10%',
    p:""

        }
      
        componentDidMount() {
          window.addEventListener('scroll', this.handleScroll);
        };
        
        componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
        };

        handleScroll=(e)=> {
          const p=e.composedPath()[1].scrollY
          console.log(p)
        
          const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
          const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] );
          console.log(isChrome)
          console.log(!!window.chrome)
          if(p>=0 && p<76 ){

            this.setState({top:'0',endTop:'-10%'})

          }else if(p>77 &&p<1056){
         
            this.setState({top:'102%'})
            if(p>130){
              this.setState({endTop:'96%'})
            }


          }else if(p>1057 ) {

            this.setState({top:'202%'})
          
          if(p>1010){
            this.setState({endTop:'198%'})
          }
        }
        };       
        
        scrollStepT() {
          
          const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
          const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] );
          if(!!window.chrome) {if (window.pageYOffset === 0) {
              clearInterval(this.state.intervalId);
          }
          window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);}
        }
      

        scrollStepA() {
          const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
         
          console.log(isChrome)
          if(isChrome) {
            if (window.pageYOffset === 0) {
              clearInterval(this.state.intervalId);
          }
          window.scroll(0, 500);}
          else {
            if (window.pageYOffset === 0) {
              clearInterval(this.state.intervalId);
          }
          window.scroll(0, 760);}
        }
      
        scrollStepW() {
          if (window.pageYOffset === 0) {
              clearInterval(this.state.intervalId);
          }
          window.scroll(0, 2835);
        }
       

        setId=(e)=>{
          const p=e.target.className
          if(p==="logo"){
            let intervalId = setInterval(this.scrollStepT());
            this.setState({ intervalId: intervalId });
          }else if(p==="about"){
            let intervalId = setInterval(this.scrollStepA());
            this.setState({ intervalId: intervalId });
          }else if(p==="work"){
            let intervalId = setInterval(this.scrollStepW());
            this.setState({ intervalId: intervalId });
          }
        }

  render() {
    return (
      <div className="App" >
          <div className="header" style={{top:this.state.top}}>
                <a className="logo" onClick={(e) =>this.setId(e)}>LailyS</a>
                <a className="about" onClick={(e) =>this.setId(e)}> About</a>
                <a className="work"  onClick={(e)=>this.setId(e)}> Work</a>
          </div>
          <div className="page-end" style={{top:this.state.endTop}}>
                <div className="line">.</div>
                <div className="line">.</div>
                <div className="line">.</div>
          </div>
         <div>{this.state.p}</div>
     <Front/>
     
     <Footer/>
      </div>
    );
  }
}

export default App;
