import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import SongFeatures from "./features/Song";
import TodoFeatures from "./features/Todo";

App.propTypes = {};

function App() {
  return (
    <div className='App'>
      Header
      <p>
        <NavLink activeClassName='active-todo' to='/todos'>
          TodoNav
        </NavLink>
      </p>
      <p>
        <NavLink activeClassName='active-album' to='/albums'>
          AlbumsNav
        </NavLink>
      </p>
      <Switch>
        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postId' to='/posts/:postId' exact />

        <Route path='/todos' component={TodoFeatures} />
        <Route exact path='/' component={TodoFeatures} />
        <Route path='/albums' component={SongFeatures} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
