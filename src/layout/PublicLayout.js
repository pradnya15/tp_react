import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
  
const PublicLayout = ({ children }) => (                         
    <div>  
      <p>This is the First Layout</p>  
      {children}                                       
    </div>  
  );  
  
  const PublicLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <PublicLayout>  
            <Component {...matchProps} />  
        </PublicLayout>  
      )} />  
    )  
  };  
  
export default PublicLayoutRoute;  