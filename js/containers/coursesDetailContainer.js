import React,{Component} from 'react'
import {Button} from '../components/button/buttons'
import {AppClassForm,UploadVideoForm} from '../components/addClass/addClass'
import {CardList} from '../components/card/card'
import {Lessions} from '../components/embed/embed'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Header} from '../components/header/header'
import * as  allActions from '../actions/allActions'
import { Router, Route, Link,RouterContext ,browserHistory} from 'react-router'
import LessonCreation from './lessonCreationContainer'

class CoursesDetail extends Component{
	constructor(props){
		super(props)
		
		this.state={
			addNewCourse:false
		}
		this.openVideoUpload=this.openVideoUpload.bind(this)
		this.cancelClick=this.cancelClick.bind(this)
	}

	openVideoUpload(e){
		this.setState({
			addNewCourse:true
		})
	}

	cancelClick(){
		this.setState({
			addNewCourse:false
		})
	}

	goBack() {
    	window.history.back();
	}

	render(){
		debugger;
		let courseId=parseInt(this.props.params.courseId)
		let headerTitle=this.props.courses[courseId].courseName
		let lessionScreenHeader=this.props.courses[courseId].lessionScreenHeader
		let lessions=this.props.courses[courseId].chepaters
		let style={display: 'flex',justifyContent: 'space-around',height: 'calc(100% - 70px)',overflow: 'auto'}
		let cardStyle={flex:'1',height:'100%',overflow:'visible'}
		let cardInnerStyle={width:'100%'}
		return(
				<div style={{height:'100%'}} className="courseDatils">
					{
					this.state.addNewCourse?<LessonCreation lessionScreenHeader={lessionScreenHeader} cancelClick={this.cancelClick} courseId={courseId} actions={this.props.actions} 	/>:
					<div style={{height:'100%'}}>
					<Header>
							<div>
								<img src={'../../../dist/images/back.png'} style={{width:'20px',marginRight:'20px'}} onClick={this.context.router.goBack} />
								<span>{headerTitle}</span>
							</div>
							<div className='field alignRight'>
									<Button label={"Add New"} className={"ui basic circular button"} value={1} onClick={this.openVideoUpload} />
							</div>
					</Header>
					<div style={style}>
						<Lessions lessions={lessions}/>
						<CardList cardInnerStyle={cardInnerStyle} cards={this.props.courses} style={cardStyle} lasttile={false} onPopupOpenClick={this.onPopupOpenClick}/>
					</div>
					</div>
					}
				</div>
			   )
	}
}

function mapStateToProps(store) {
	return{
		...store.availabelCourses.content
	}
}

function mapPropsToAction(dispatch){
	return{
		actions:bindActionCreators(allActions,dispatch)
	}
}

CoursesDetail.contextTypes = {
  router: React.PropTypes.object
}

let CoursesDetailContainer=connect(mapStateToProps,mapPropsToAction)(CoursesDetail)

export default CoursesDetailContainer
