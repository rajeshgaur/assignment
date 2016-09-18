import React,{Component} from 'react'

require('./header.css')
export const Header = ({...props
}) => (
  <div className="nav header">
    {props.children}
  </div>
)
