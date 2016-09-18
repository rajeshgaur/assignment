import React,{Component} from 'react'
import {Button} from '../components/button/buttons'
import {AppClassForm,UploadVideoForm} from '../components/addClass/addClass'
import {CardList} from '../components/card/card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Header} from '../components/header/header'
import * as  allActions from '../actions/allActions'

class AvailableCourses extends Component{
	constructor(props){
		super(props)
		this.state={
			popup:false,
			popupTitle:'',
			popupDescription:''
		}
		this.onPopupOpenClick=this.onPopupOpenClick.bind(this)
		this.onPopupCloseClick=this.onPopupCloseClick.bind(this)
		this.onAddNewClass=this.onAddNewClass.bind(this)
		this.onpopupTitleChange=this.onpopupTitleChange.bind(this)
		this.onpopupDecriptionChange=this.onpopupDecriptionChange.bind(this)
	}
	onPopupCloseClick(e){
		debugger;
		this.setState({
			popup:false,
			popupTitle:'',
			popupDescription:''
		})
	}

	onpopupTitleChange(e){
		let val=e.target.value
		this.setState({popupTitle:val})
	}
	onpopupDecriptionChange(e){
		let val=e.target.value
		this.setState({popupDescription:val})	
	}
	onPopupOpenClick(){
		
		this.setState({
			popup:true
		})
	}

	onAddNewClass(){
		this.setState({
			popup:false,
			popupTitle:'',
			popupDescription:''
		})
		this.props.actions.addNewClass(this.state.popupTitle,this.state.popupDescription)	
	}

	onCourseClick(id,name){
		debugger;
	}

	render(){
		debugger;
		return(
				<div style={{height:'100%'}} className="availabelCourses">
					{this.state.popup?<div className='overlay'><AppClassForm title={this.state.popupTitle} 
					description={this.state.popupDescription} onpopupTitleChange={this.onpopupTitleChange}
				    onpopupDecriptionChange={this.onpopupDecriptionChange} onAddNewClass={this.onAddNewClass}
				    onPopupCloseClick={this.onPopupCloseClick} /></div>:[]}
					<Header>
						<div><span>{this.props.header.title}</span></div>
						<div></div>
					</Header>
					<CardList cards={this.props.content.courses} lasttile={true}  onPopupOpenClick={this.onPopupOpenClick} />
				</div>
			   )
	}
}

function mapStateToProps(store) {
	return{
		...store.availabelCourses
	}
}

function mapPropsToAction(dispatch){
	return{
		actions:bindActionCreators(allActions,dispatch)
	}
}


let AvailableCoursesContainer=connect(mapStateToProps,mapPropsToAction)(AvailableCourses)

export default AvailableCoursesContainer

