import React, { Component } from 'react';
import Header from './container/template/Header'
import Menu from './container/template/Menu'
import Footer from './container/template/Footer'
import Content from './container/datatable/Content'


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
      <div>
        <Header/>
        <Menu/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}
