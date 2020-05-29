import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase';

import Home from './componentes/Home';
import Header from './componentes/Header';
import './global.css';


class App extends Component {

  state = {
    firebaseInitalized: false
  };

  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      //Devolve o usuario! Assim como se esta tudo okay!
      this.setState({firebaseInitalized: resultado});
    })
  }

  render(){
    return this.state.firebaseInitalized !== false ? (
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}

export default App;
