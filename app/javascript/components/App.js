import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pub from './Pub/Pub';
import Pubs from './Pubs/Pubs';
import Navbar from './Navbar/Navbar';
import GlobalStyleComponet from '../styles/GlobalSyle';


const App = () => {
  return (
    <>
      <GlobalStyleComponet />
      <Navbar />
        <Switch>
          <Route exact path="/" component={Pubs} />
          <Route exact path="/pubs/:slug" component={Pub} />      
        </Switch>
    </>
  )
}

export default App;
