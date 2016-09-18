import React,{Component} from 'react'

import { Link } from 'react-router'

require('./cardLayout.css')

export default class CardLayout extends Component{
	componentDidMount(){
			//this.props.actions.getLatestSongs();
			$.getJSON("http://ec2-52-36-80-134.us-west-2.compute.amazonaws.com:8080/useraccount/rest/songs/latestbollywood",function(data){
				console.log(data);
			})
	}

	render(){
		let imgClass={
			width:'100%',
			height:'177px',
			background:'url(../../../static/images/emma3.jpg) no-repeat',
			backgroundSize:'cover'
		}
		let output=[];

		for(let y=0;y<4;y++)
		{
			output.push(

			<div key={y} className="cardLayout">
				<div className="cardImg" style={imgClass}></div>
				<div className="cardContent">
					<div className="title">
						<span><Link to="/movie">Emma</Link></span>
					</div>
				</div>
			</div>
				)
		}
		return(
			<div className="card">
				{output}
				{output}
				{output}
				{output}
				{output}
				<div style={{clear:'both'}}></div>
			</div>
			)
	}
}