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
import login from './components/Login'
import logout from './components/logout'

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

   <Route path='/register' exact component = {signUp}/>
   <Route path='/login' exact component = {login}/>
   <Route path='/logout' exact component = {logout}/>

  <Route  path ='/:id' component = {Description}/>

 
   
    
  </Switch>
  </Router>
  ,
  document.getElementById('root')
);


