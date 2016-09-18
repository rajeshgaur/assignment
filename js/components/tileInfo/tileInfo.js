import React,{Component} from 'react'
import TileImageHolder from './tileImageHolder'
import TileDownloadLinks from './tileDownloadLinks'

let songList=[
	{
		songName:"emma is sweet",
		songLink:""
	},
	{
		songName:"emma is god",
		songLink:""
	},
	{
		songName:"emma is beautiful",
		songLink:""
	},
	{
		songName:"emma is smart",
		songLink:""
	},
	{
		songName:"emma is darling",
		songLink:""
	},
	{
		songName:"emma is simpal",
		songLink:""
	},
	{
		songName:"emma is awesome",
		songLink:""
	},
	{
		songName:"emma is intellignet",
		songLink:""
	},
	{
		songName:"emma is cute",
		songLink:""
	},
	{
		songName:"be like emma",
		songLink:""
	},


]

export default class tileInfo extends Component{
	render(){
		return(<div>
			<div className="titleInfoHeader">
				  <span className="test">Emma Watson</span>
	   </div>
		 <div className="tileInfoContent">
			 <TileImageHolder />
	 		 <TileDownloadLinks songList={songList}/>
    </div>

		</div>)
	}
}
