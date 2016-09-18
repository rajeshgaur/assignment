import React from 'react'
import { Router, Route, Link } from 'react-router'

require('./card.css')
export const Cards=({...props})=>{
return(
   <div className="card" style={props.style}>
   <Link to={`/courses/${props.id}`}>
    <div className="image">
      <img src={props.imgLink}  />
    </div>
    </Link>
    <div className="content">
      <div className="header">{props.courseName}</div>
      <div className="meta">
        Added By : {props.adderName}
      </div>
      <div className="description">
      </div>
    </div>
  </div>
	)
}

export const SimpalCard=({onPopupOpenClick,...props})=>(
  <div className="card">
  <div className="content simpalcard" onClick={onPopupOpenClick}>
    <div>
      <div style={{padding: '0 30px'}}><img src={'../../../dist/images/add.png'}  width='40px' /></div>
      <div>Create New Classs</div>
    </div>
  </div>
</div>
)

export const CardList=({cards,onPopupOpenClick,style,lasttile,...props})=>{
  return(
    <div className="contentWrapper" style={style}>
    <div className="ui link cards">
        {
          cards.length>0?cards.map((card,i)=>{
            return <Cards style={props.cardInnerStyle} propskey={i} {...card}/>
          }):[]
        }
        {lasttile?<SimpalCard onPopupOpenClick={onPopupOpenClick}/>:[]}
      </div>
    </div>
    )
}