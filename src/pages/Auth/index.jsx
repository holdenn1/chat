import React from 'react';
import {Route} from 'react-router-dom'
import {LoginForm} from './../../modules'
import './Auth.scss'


const Auth = () => {
  return (
     <section className='auth'>
       <div className="auth__content">
         <Route exact path='/' component={LoginForm}/>
         <Route exact path='/register' />
       </div>
     </section>
  );
};

export default Auth;