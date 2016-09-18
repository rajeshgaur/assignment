import React from 'react'

require('./embed.css')
export const EmbedLink=({source,id,placeholder,courseName,description,...props})=>(
	<div className="embed">
		<div className="ui embed active" data-source="youtube" data-id="O6Xo21L0ybE">
		<div className="embed">
		    <iframe src={source} width="100%" height="100%"></iframe>
		</div>
		</div>
		<div className='content'>
			<div className="header">{courseName}</div>
			<div className="description">{description}</div>
		</div>
	</div>
)

export const Lessions=({lessions,...props})=>(
  <div style={{ flex: '3', margin: '50px'}}>
  	{
  		lessions.length>0?lessions.map((lesson,i)=>{
  			return <EmbedLink key={i} {...lesson} />
  		}):[]
  	}
  </div>
)