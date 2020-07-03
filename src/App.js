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
      page: <Cotacoes page={()=>this.back()}/>
    })
  }

  back = () => {
    this.setState({
      page: <Form state={()=>this.next()}/>
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
