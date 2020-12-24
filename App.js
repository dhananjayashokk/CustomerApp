import React, { Component } from 'react';
import Routes from './src/routes/routes.js';
import { Provider } from 'react-redux';
import { store } from "./src/store";

export default class App extends Component {
  render()
  {
    console.disableYellowBox = true;
    return (
    	<Provider store={store}>
      		<Routes />
      	</Provider>	
    );
  }
}
