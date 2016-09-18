import React,{Component} from 'react'
import Slider from 'react-slick'
import Header from '../header/header'

require('./headerSlider.css')

let settings={
	  dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
}


export default class HeaderSlider extends Component{
	render(){
		debugger;
		return(
			<div>
			<Header data={this.props.data} />
			 <Slider {...settings}>
		        <div>
		           <div className="sliderStyle">
		             
		            </div>
		        </div>
		         <div>
		           <div className="sliderStyle1">
		            
		            </div>
		        </div>
		         <div>
		           <div className="sliderStyle2">
		            
		            </div>
		        </div>
		         <div>
		           <div className="sliderStyle3">
		            </div>
		        </div>
		        
		         
      		</Slider>
      		</div>
			  )
	}
}