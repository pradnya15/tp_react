import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
  
const DashboardLayout = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <div className="sidebar text-danger">This is the Admin Layout</div> 
      <Navbar/>
      <Sidebar/> 
      <div className="main">{children}</div> 
      <Footer/> 
    </div>  
  )  
}  
  
const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
    )} />  
  )  
};  
  
export default DashboardLayoutRoute;  