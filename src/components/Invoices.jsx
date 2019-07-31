import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Invoices extends Component {
    render() {
        return(
            <div>Este es el componenete Invoice! <Link to="/">Volver a la raíz</Link> </div>
        )
    }
}
