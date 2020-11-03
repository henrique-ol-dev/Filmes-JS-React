import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render(){
        return(
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">{this.props.titulo}</h1>
                <p class="lead">{this.props.descricao}</p>
                </div>
            </div>
        )
    }
}