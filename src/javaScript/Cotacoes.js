import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import listCotacoes from '../service/api'
import { render } from '@testing-library/react';


class Cotacoes extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				cotacoes: this.getCotacoesAPI(),
				fornecedor: null,
				modalOpen: false
			}
	}

	getCotacoesAPI = async () => {
		try {
			const response = await listCotacoes.get('https://ftuhyefhmj.execute-api.us-east-1.amazonaws.com/Prod/rfq');
			// console.log(response)
			if (response.status === 200) {
				this.setState({ cotacoes: response.data })
			}

		} catch (err) {
			console.log(err)
				// alert(err);
		}
	}

	filterName = (item) => {
		// console.log(item)
		if(item.quotations !== undefined){
			// console.log(item.quotations)
			item.quotations.forEach(el => {
				// console.log(el.supplierName)
				return (<p>{el.supplierName}</p>)
			})
		}
	}

	setModal = (e, index) => {
		e.preventDefault();
		// console.log(index)
		this.modalComponent(index)
		this.setState({
			modalOpen: !this.state.modalOpen
		})
	}

	handleMouseEnter = e => {
		const { id } = e.target;
		const opportunity = this.state.bubbles.find(d => d.id === Number(id));
	};
	modalComponent = (index) => {
		const array = this.state.cotacoes.find(item => item.rfqid === index)
		console.log(array)
		// console.log(index)
		return(
		<div className="containerOpacyt">
			<div className="containerOpacyt-modal">
				<span className="modal-close" onClick={(e)=>this.setModal(e)}>&#x2715;</span>
				{/* <div>{array.impName}</div> */}
				{
					// console.log(index)
					
					// if(index === item.rfqId){
					// 	console.log('if')
					// 	return(
					// 		<div key={item.rfqId}>{item.impName}</div>
					// 	)
					// }
					// else{
					// 	console.log("else")
					// 	return(
					// 		<div key={item.rfqId}>não foi</div>
					// 	)
					// }
					
				}				
			</div>
		</div>
		)
	}
	

	render() {
		return (
			<div className="container_cotacoes">
				<h1 className="container_cotacoes-title">Cotações Solicitadas</h1>
				<p className="container_cotacoes-arrowBack" onClick={this.props.page}><span className="arrowBack">&#11013;</span>Solicitar</p>
				<div className="container_cotacoes-cards_container">
					{this.state.cotacoes.length > 0 ?
						this.state.cotacoes.map(incident => (
							<div className="cards_container-cards" key={incident.rfqId}>
								<p className="textContent">Nome: {incident.impName}</p>
								{this.filterName(incident)}
								<div className="box-dataOrganization">
									<p className="textContent">Quantidade: {incident.impAmount}</p>
									<p className="textContent">Data necessidade: {incident.impDate}</p>
								</div>
								<p className="cards-linkDetails" href="" onClick={(e)=>this.setModal(e, incident.rfqId)}>detalhes &#x27A4;</p>
							</div>
						)) : <p>Carregando cotações . . .</p>
					}
				</div>
				{/* {this.modalComponent()} */}
				{this.state.modalOpen && this.modalComponent()}
			</div>
		);
	}


}



export default Cotacoes;