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
    r:"",
    footer:0,

        }
      
        componentDidMount() {
          window.addEventListener('scroll', this.handleScroll);
        };
        
        componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
        };

        handleScroll=(e)=> {
          const p=e.composedPath()[1].scrollY
          console.log(/iPad/i.test(navigator.userAgent))
          console.log(!!window.chrome)
         
         
          console.log(p)



 if(navigator.userAgent.match(/iPhone/i)!== null){
            if(navigator.userAgent.match(/iPhone/i)[0]==="iPhone"){
              if(window.orientation===0){
                if(p>=0 && p<90 ){

                  this.setState({top:'0',endTop:'-10%'})
      
                }else if(p>91 &&p<750){
               
                  this.setState({top:'111%'})
                  if(p>300){
                    this.setState({endTop:'96%'})
                  }
      
      
                }else if(p>751 ) {
      
                  this.setState({top:'215%'})
                
                if(p>801){
                  this.setState({endTop:'198%'})
                }
              }
              }else {
          
                if(p>=0 && p<80){

                  this.setState({top:'0',endTop:'-10%'})
      
                }else if(p>81 &&p<407){
               
                  this.setState({top:'102%'})
                  if(p>130){
                    this.setState({endTop:'96%'})
                  }
      
      
                }else if(p>408 ) {
      
                  this.setState({top:'206%'})
                
                if(p>1010){
                  this.setState({endTop:'198%'})
                }
              }
              }
  
             
            }
          }else if(!!window.chrome || /iPad/i.test(navigator.userAgent)){
           
            if(p>=0 && p<80 ){

              this.setState({top:'0',endTop:'-10%'})
  
            }else if(p>81 &&p<1000){
           
              this.setState({top:'102%'})
              if(p>300){
                this.setState({endTop:'96%'})
              }
  
  
            }else if(p>1001 ) {
  
              this.setState({top:'202%'})
            
            if(p>801){
              this.setState({endTop:'198%'})
            }
          }

          }else if(/android/i.test(navigator.userAgent)){
          


          }else{
        
            if(p>=0 && p<80){

              this.setState({top:'0',endTop:'-10%'})
  
            }else if(p>81 &&p<850){
           
              this.setState({top:'102%'})
              if(p>130){
                this.setState({endTop:'96%'})
              }
  
  
            }else if(p>851 ) {
  
              this.setState({top:'202%'})
            
            if(p>1010){
              this.setState({endTop:'198%'})
            }
          }

          }
        

         
      
        };       
        
        scrollStepT() {
          
        
          if(!!window.chrome) {if (window.pageYOffset === 0) {
              clearInterval(this.state.intervalId);
          }
          window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);}
        }
      

        scrollStepA() {
          if(navigator.userAgent.match(/iPhone/i)!== null){
            if(navigator.userAgent.match(/iPhone/i)[0]==="iPhone"){

            if(window.orientation===0){
                if (window.pageYOffset === 0) {
                  clearInterval(this.state.intervalId);
                  
              }
              window.scroll(0, 600);
              } else{
                
                if (window.pageYOffset === 0) {
                  clearInterval(this.state.intervalId);
                  
              }
              window.scroll(0, 376);

              }

           

            }}else if(!!window.chrome){
              if (window.pageYOffset === 0) {
                clearInterval(this.state.intervalId);
            }
            window.scroll(0, 700);
            }else if(/android/i.test(navigator.userAgent)){
            
            }else{
              if (window.pageYOffset === 0) {
                clearInterval(this.state.intervalId);
                
            }
            window.scroll(0, 760)
            }
          
       

       
        }
      
        scrollStepW() {
          if(navigator.userAgent.match(/iPhone/i)!== null){
            if(navigator.userAgent.match(/iPhone/i)[0]==="iPhone"){

              if(window.orientation===0){
                this.setState({r:window.orientation})
                if (window.pageYOffset === 0) {
                  clearInterval(this.state.intervalId);
              }
              window.scroll(0, 2650);

              }else if(window.orientation===90){
                this.setState({r:window.orientation})
                if (window.pageYOffset === 0) {
                  clearInterval(this.state.intervalId);
              }
              window.scroll(0, 2700);

              }}}else{
                if (window.pageYOffset === 0) {
                  clearInterval(this.state.intervalId);
              }
              window.scroll(0, 2835);
              }
          
         
   
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
                <div>{this.state.r}</div>
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
     
     <Footer style={{bottom:this.state.footer}}/>
      </div>
    );
  }
}

export default App;

