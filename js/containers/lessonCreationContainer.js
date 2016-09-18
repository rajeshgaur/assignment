import React,{Component} from 'react'
import {Button} from '../components/button/buttons'
import {AppClassForm,UploadVideoForm} from '../components/addClass/addClass'
import {CardList} from '../components/card/card'
import {Lessions} from '../components/embed/embed'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Header} from '../components/header/header'
import * as  allActions from '../actions/allActions'
import { Router, RouterContext, Link, browserHistory } from 'react-router'

export default class LessonCreation extends Component{
	constructor(props){
		super(props)
		this.state={
			title:'',
			description:'',
			uploadLink:'',
			indexNumber:''
		}
		this.onTitleChange=this.onTitleChange.bind(this)
		this.onDescriptionChange=this.onDescriptionChange.bind(this)
		this.onLinkPaste=this.onLinkPaste.bind(this)
		this.onIndexChange=this.onIndexChange.bind(this)
		this.onSave=this.onSave.bind(this)
		this.goBack=this.goBack.bind(this)
		this.cancelClick=this.cancelClick.bind(this)
	}

	onTitleChange(e){
		let val=e.target.value
		this.setState({title:val})
	}
	onDescriptionChange(e){
		let val=e.target.value
		this.setState({description:val})
	}
	onLinkPaste(e){
		let val=e.target.value
		this.setState({uploadLink:val})
	}
	onIndexChange(e){
		let val=e.target.value
		this.setState({indexNumber:val})
	}
	cancelClick(){
		this.props.cancelClick()
		this.setState({
			title:'',
			description:'',
			uploadLink:'',
			indexNumber:''
		})
	}
	onSave(){
		let courseId=this.props.courseId
		this.props.actions.addNewLessonInGivenClass({...this.state},courseId)
		this.props.cancelClick();
		this.setState({
			title:'',
			description:'',
			uploadLink:'',
			indexNumber:''
		})
	}

	goBack() {
       window.history.back();
	}

	render(){
		let lessionScreenHeader=this.props.lessionScreenHeader
		return(
				<div style={{height:'100%'}}>
					<Header>
							<span>{lessionScreenHeader}</span>
							<div className='field alignRight'>
									<Button label={"Save"} className={"ui basic circular button"} value={1}  onClick={this.onSave}/>
									<Button label={"Cancel"} className={"ui basic circular button"} value={2}  onClick={this.cancelClick}/>
							</div>
					</Header>
					<UploadVideoForm {...this.state} onTitleChange={this.onTitleChange} onIndexChange={this.onIndexChange}
					onDescriptionChange={this.onDescriptionChange} onLinkPaste={this.onLinkPaste} />
				</div>
			   )
	}
}
