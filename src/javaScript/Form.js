import React, {Component} from 'react';
import '../App.css';
import Logo from '../img/logoE.jpeg'
import api from '../service/api'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      impName:null,
      impAmount: null,
      impDescription: null,
      impCertifications: null,
      impLocal: null,
      impNcmCode: null,
      impMeasure: null,
      impDate: null,
      impComplementary: null,
      returnMessage: ''
    }
  }

  postApi = async(data) => {
    // console.log('oiio')
    try{
      const response = await api.post(
        'save',data,{headers:{'Content-Type': 'application/json'}}
      )
      if (response.status === 204){
        this.setState({
          returnMessage: 'Solicitação enviada com sucesso!'
        })
        setTimeout(
          function(){
            this.setState({
              returnMessage: ''
            })
          }.bind(this),3000 
        )
      }
      console.log(response)
    }
    catch(error){
      console.log(error)
    };
  }
  
  sevedData = (e) =>{
    e.preventDefault()
    
    let data = JSON.stringify(this.state);
    
    this.postApi(data)

    document.getElementById('nome').value = '' 
    document.getElementById('quantidade').value = ''
    document.getElementById('descricao').value = ''
    document.getElementById('certific').value = ''
    document.getElementById('infor').value = ''
    document.getElementById('local').value = ''
    document.getElementById('ncm').value = ''
    document.getElementById('medida').value = ''
    document.getElementById('data').value = ''
  }
  
  getValueItens = (e) => {
    this.setState({
      impName:document.getElementById('nome').value,
      impAmount: document.getElementById('quantidade').value,
      impDescription: document.getElementById('descricao').value,
      impCertifications: document.getElementById('certific').value,
      impComplementary: document.getElementById('infor').value,
      impLocal: document.getElementById('local').value,
      impNcmCode: document.getElementById('ncm').value,
      impMeasure: document.getElementById('medida').value,
      impDate: document.getElementById('data').value,
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="header-logo" src={Logo}></img>
          <h1>MVP Cotação-e</h1>
        </header>
        <form className="App-form" onSubmit={(e) => this.sevedData(e)}>
          <h2 className="form-tilte">Diga ao fornecedor o que você precisa</h2>
          <p onClick={this.props.state}>seta</p>
          <div className="form-container_infoForm">
            <div className="container_infoForm-inputBoxs">
              <label>Nome do produto<span>*</span></label>
              <input id="nome" onChange={(e)=>this.getValueItens(e)} type="text"></input>
            </div>
            <div className="container_infoForm-inputBoxs">
              <label>Quantidade<span>*</span></label>
              <input id="quantidade" onChange={(e)=>this.getValueItens(e)} type="number" placeholder="20"></input>
            </div>
            <div className="container_infoForm-inputBoxs">
              <label>Unidade de medida<span>*</span></label>
              <input id="medida" onChange={(e)=>this.getValueItens(e)} type="text" placeholder="unidade, metro, etc"></input>
            </div>
            <div className="container_infoForm-inputBoxs">
              <label>Descrição</label>
              <textarea id="descricao" className="inputBig" type="text"></textarea>
            </div>
            <div className="container_infoForm-inputBoxs">
              <label>Certificações</label>
              <input id="certific" onChange={(e)=>this.getValueItens(e)} type="text"></input>
            </div>
            <div className="container_infoForm-inputBoxs">
              <label>Codigo NCM</label>
              <input id="ncm" onChange={(e)=>this.getValueItens(e)} type="text"></input>
            </div>
            <div className="container_infoForm-inputBoxs">
              <label>Data de necessidade</label>
              <input id="data" onChange={(e)=>this.getValueItens(e)} type="date"></input>
            </div>
            <div className="container_infoForm-inputBoxs">
              <label>Informações complementares</label>
              <input id="infor" onChange={(e)=>this.getValueItens(e)} className="inputMedium" type="text"></input>
            </div>
            <div className="container_infoForm-inputBoxs">
              <label>Local de entrega<span>*</span></label>
              <input id="local" onChange={(e)=>this.getValueItens(e)} className="inputMedium" type="text" placeholder="Cidade/Estado"></input>
            </div>
          </div>
          <p id="feedback" className="messasuceful">{this.state.returnMessage}</p>
          <button className="form-btnSubmit" type="submit">Solicitar Cotações</button>
        </form>
      </div>
    );
  }
}

export default Form;
