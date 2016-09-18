import React, { Component } from 'react'
import HeaderContainer from '../../containers/header/headerContainer'

/*import MainContent from './TodoList'
import Footer from './UserInfo'*/
require('./layout.css')
export default class Layout extends Component {

  render() {
  	debugger;
    return (
      <div className="app-main">
        <HeaderContainer />  
        {this.props.children}    
      </div>
    )
  }

}


