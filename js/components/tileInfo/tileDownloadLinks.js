import React,{Component} from 'react'

require('./tileInfo.css')
export default class TileDownloadLinks extends Component{
	render(){

		let songList=this.props.songList
		let songHtml=songList.map(function (item) {
			return(
				<div className="songItem">
					<div className="songName">{item.songName}</div>
					<div className="songLink">
						<a href={item.link}></a>
					</div>
				</div>
				)
		})
		return(
			<div className="tileInfolinks">
			   {songHtml}
			</div>
			)
	}
}
