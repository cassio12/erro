import React, {Component} from 'react';
import './App.css';
import Form from './javaScript/Form'
import Cotacoes from './javaScript/Cotacoes'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Form state={()=>this.next()}/>
    }
  }

  next = () => {
    this.setState({
      page: <Cotacoes/>
    })
  }
 
  render() {
    return (
      // this.state.page
      <Cotacoes/>
    );
  }
}

export default App;
