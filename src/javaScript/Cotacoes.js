import React, {Component, useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios'
import listCotacoes from '../service/api'


export default function Cotacoes() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cotacoes: []
    //     }
    // }

    state = {
        cotacoes: []
    }

    
    const getApi = async() => {
        console.log('oiio')
        try{
            const response = await listCotacoes.get('rfq')
            
            // this.state.cotacoes.push(response.data)
            console.log(response.data)
            
            this.setState({
                cotacoes: response.data
            })
            
            // console.log(cotacoes)    
            // return this.state.cotacoes.map((item, index) => {
            //     return (
            //         <div>{item}</div>
            //     );
            // })      
            return (<di>bololo</di>)
        }
        catch(error){
            console.log(error)
        };

    // var xhr = new XMLHttpRequest();

    // xhr.addEventListener("readystatechange", function() {
    // if(this.readyState === 4) {
    //     console.log(this.responseText);
    // }
    // });
    // console.log(xhr)
    // xhr.open("GET", "https://ftuhyefhmj.execute-api.us-east-1.amazonaws.com/Prod/rfq");

    // xhr.send();

    // axios.get(`https://ftuhyefhmj.execute-api.us-east-1.amazonaws.com/Prod/rfq`)
    //   .then(res => {
    //     const prices = res.data;
    //     this.setState({ prices });
    //     })


  }

//   render() {
    // let data = JSON.stringify(this.state);
    // console.log(data)
    // console.log(this.state.cotacoes)
    return (
        <div>
        {getApi()}
            {/* <ul> */}
                {/* {this.state.cotacoes[0].length >0 ? this.state.cotacoes[0].map( item => (<li>{item}</li>)) : <p>lista vazia</p>} */}
                {/* {this.state.cotacoes[0].map( item => {<li>{item}</li>}) } */}
            {/* </ul> */}
            {/* <p>bololo</p> */}
        </div>
    );
//   }
}

// export default App;
