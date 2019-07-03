import React, { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from '../general/Spinner';

import * as usuariosActions from '../../actions/usuariosActions'
import Fatal from '../general/Fatal';
import Tabla from './Tabla';


class Usuarios extends Component {
  
  componentDidMount() {
    if(!this.props.usuarios.length) {
      this.props.traerTodos()
    }
    
  }
  ponerContenido = () => {
    if(this.props.cargando) {
      return <Spinner/>
    }
    if(this.props.error) {
      return <Fatal mensaje={this.props.error}/>
    }
    return <Tabla/>
  }
  
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>Usuarios</h1>
        {this.ponerContenido()}
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducers;
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
