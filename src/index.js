import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from './components/carousel'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import VideoHelper from './components/videoHelper'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'


import Description from './components/description'
import Query from './components/query'
import signUp from './components/signUp'

ReactDOM.render(
  <Router>
    <Switch>
    
  <Route exact path='/' exact render ={()=>
      <React.Fragment>
         <NavBar/>
         <Carousel/>
         
        
         <VideoHelper genre ={"upcoming"} />
         <VideoHelper genre ={"top_rated"}/>
         
         <VideoHelper genre ={"popular"}/>
      
         </React.Fragment>
       
  }/>

  <Route  path='/info' render={()=>
  <React.Fragment>
    <NavBar/>
  </React.Fragment>
  
  }/>



  

   <Route path = '/search/:query' component = {Query}/>

   <Route path='/register' component = {signUp}/>

  <Route  path ='/:id' component = {Description}/>

 
   
    
  </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
