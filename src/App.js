import React, { Component } from 'react';
import {Element} from 'react-scroll'
import Header from  './Components/Header'
import Profile from './Profile'
import Projects from './Projects'
import Tech from './Tech'
import Hobby from './Hobby'
import Contact from './Contact'
import Footer from './Components/Footer'
import ScrollArrow from './Components/ScrollArrow'
import './App.css';
import Fade from 'react-reveal/Fade';


class App extends Component {


  state = {
    
    pageShow : false
  }



  componentDidMount(){

         console.log("first",this.state.pageShow)
          window.addEventListener('scroll',this.handleScroll);
          //window.addEventListener('click',this.handleScroll);
  }

  


  handleScroll =() =>{
            console.log(this.state.pageShow)

      this.setState({
        pageShow : true

      })
                 
    
  }



 
 render(){


 
  return (

        <div className="" style={{height:"100vh"}}>
        
        <Header/>
          <Element name="profile">
          <Profile/>
          </Element>


        
        <Element name="projects">
          <Fade left>
           <Projects/>
          </Fade>
        </Element>
        <Element name="tech">
        <Fade left>
           <Tech/>
          </Fade>
        </Element>

        <Element name="hobby">
          <Fade left>
           <Hobby/>
          </Fade>
        </Element>

        <Element name="contact">
           <Fade left> 
           <Contact/>
          </Fade>
        </Element>
         
        <ScrollArrow/>
        <Footer/>
       
        </div>
  );
}
}

export default App;
