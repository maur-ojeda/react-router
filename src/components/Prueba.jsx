import React, { Component } from 'react'

export default class Prueba extends Component {
    
    handleClick = () => {
        const { history } = this.props
        //cuando usuario inicia sesion de forma exitosa en la aplicacion
        //o cuando necesitamos cerrala sesion
        history.push('/invoices')
    }
    
    render() {
        return <div onClick={ this.handleClick }>'este es el componenete Pruebas!'</div>
    }
}
