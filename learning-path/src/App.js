import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';

function App() {

  
  return (
    <Provider store={store}>
    <div className="App">
      {/* <UserContainer /> */}
      <CakeContainer />
      {/* <HooksCakeContainer />
      <IceCreamContainer /> */}
    </div>
    </Provider>
  );
}
export default App;
