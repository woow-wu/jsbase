import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'src/pages/Home';

export default class Router extends React.Component {
  render() {
    return (
      <>
        <Route path='/' component={Home} />
      </>
    );
  }
}