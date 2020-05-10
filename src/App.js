import React, { Component } from 'react';
import Header from './container/template/Header'
import Menu from './container/template/Menu'
import Footer from './container/template/Footer'
import Listing from './container/todo/Listing'
import Add from './container/todo/Add'
import {BrowserRouter,Route} from 'react-router-dom'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // isAddProduct: false,
      error: null,
      response: {},
      product: {},
      // isEditProduct: false
    }
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                {/*<Listing/>*/}
                <Menu/>
                <Footer/> 

                <Route exact path="/" component={Listing} />
                <Route path="/add" component={Add} />
            </div>
        </BrowserRouter>
    );
  }
}
