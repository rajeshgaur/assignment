import React from 'react'
import {Button} from '../button/buttons'

require('./addClass.css')

export const AppClassForm=({title,description,onAddNewClass,onPopupCloseClick,...props})=>(
	<div className='ui form addClassForm'>
		<div className='field'>
			<div className="alignRight close" onClick={onPopupCloseClick}>
					<img src={'../../../dist/images/close.png'}  width='20px' />
			</div>
			<h4 className="header">Add Class</h4>
		</div>
		
		<div className='field'>
			<label>Title</label>
			<input type='text' value={title} placeholder='Please select your desired title' onChange={(e)=>{props.onpopupTitleChange(e)}}/>
		</div>
		<div className='field'>
			<label>Description</label>
			<textarea value={description} placeholder="Explian what's the purpose of the class if anyone has any doubt" onChange={(e)=>{props.onpopupDecriptionChange(e)}} ></textarea>
		</div>
		<div className='field alignRight'>
			<Button label={"Cancel"} className={"ui basic circular button"} value={1} onClick={onPopupCloseClick}/>
			<Button label={"Create"} className={"ui violet circular button"} value={2} onClick={onAddNewClass}/>
		</div>
	</div>
)



export const UploadVideoForm=({title,description,uploadLink,indexNumber,...props})=>(
	<div className='ui form uploadViedoForm'>
		<div className='field'>
			<label>Title</label>
			<input type='text' value={title} placeholder='Please select your desired title' onChange={(e)=>{props.onTitleChange(e)}}/>
		</div>
		<div className='field'>
			<label>Description</label>
			<textarea  value={description} placeholder="Explian what's the purpose of the class if anyone has any doubt" onChange={(e)=>{props.onDescriptionChange(e)}} ></textarea>
		</div>
		<div className='field'>
			<label>Upload Video</label>
			<input type="text" value={uploadLink} placeholder="Paste the url here" onChange={(e)=>{props.onLinkPaste(e)}} />
		</div>
		<div className='field'>
			<label>Index Number</label>
			<input type='number' min='0' value={indexNumber} placeholder="Please select your desired number" onChange={(e)=>{props.onIndexChange(e)}} 	/>
		</div>
	</div>
)