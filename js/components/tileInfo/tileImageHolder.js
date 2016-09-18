import React,{Component} from 'react'

require('./tileInfo.css')
export default class TileImageHolder extends Component{
	render(){
		let imgClass={
			width:'100%',
			height:'400px',
			background:'url(../../../static/images/emma3.jpg) no-repeat',
			backgroundSize:'cover'
		}

		return(
			<div className="tileInfoImages">
				<div className="tileInfoImg" style={imgClass}>
	      </div>
				<div className="tileInfoContent">
					<div className="title">
						<span>Emma</span>
					</div>
				</div>
		</div>)
	}
}
