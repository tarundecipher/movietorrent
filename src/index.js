import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from './components/carousel'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import VideoHelper from './components/videoHelper'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Test from './components/test'
import BannerAdd from './components/bannerAdd'
import Description from './components/description'
import Query from './components/query'

ReactDOM.render(
  <Router>
    <Switch>
    
  <Route exact path='/' exact render ={()=>
      <React.Fragment>
         <NavBar/>
         <Carousel/>
         <h4 className='VPN container'>Use VPN to load the website</h4>
        
         <VideoHelper genre ={"Most Liked"} />
         <VideoHelper genre ={"Mystery"}/>
         
         <VideoHelper genre ={"Animation"}/>
      
         </React.Fragment>
       
  }/>

  <Route  path='/info' render={()=>
  <React.Fragment>
    <NavBar/>
  </React.Fragment>
  
  }/>

  <Route path='/test' render={()=>
    <Test/>
  }/>

  <Route  path = '/banner' render={()=>
  <BannerAdd/>
  }/>

   <Route path = '/search/:query' component = {Query}/>

  <Route  path ='/:id' component = {Description}/>

 
   
    
  </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
