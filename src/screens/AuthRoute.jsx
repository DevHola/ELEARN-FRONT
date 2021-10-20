import React from "react";

import { connect } from "react-redux";

import { Redirect, Route } from 'react-router-dom';


const AuthRoute = props => {

  const { isAuthenticated, type } = props;


  if (type === "guest" && isAuthenticated) return <Redirect to="/home" />;

  else if (type === "private" && !isAuthenticated) return <Redirect to="/" />;


  return <Route {...props} />;

};


const mapStateToProps = ({ isAuthenticated }) => ({

  isAuthenticated

});


export default connect(mapStateToProps)(AuthRoute);