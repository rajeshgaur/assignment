import React from 'react'
import { render } from 'react-dom'
import configureStore from '../stores/store'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import AvailableCourses from '../containers/availableCoursesContainer'
import CoursesDetail from '../containers/coursesDetailContainer'
import LessonCreation from '../containers/lessonCreationContainer'


let initialState = {
  availabelCourses:{
    header:{
      title:'Share & Learn'
    },
    content:{
      courses:[
      {
        imgLink:'http://lorempixel.com/400/200',
        id:0,
        courseName:'Color Story',
        adderName:'Sprinklr',
        type:'ADDEDCARD',
        lessionScreenHeader:'Upload Video',
        chepaters:[
        {
          source:'https://www.youtube.com/embed/e-5obm1G_FY',
          id:'0',
          placeholder:'',
          courseName:'Color Story',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          source:'https://www.youtube.com/embed/e-5obm1G_FY',
          id:'1',
          placeholder:'',
          courseName:'Color Story',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
        ]
      },
      {
        imgLink:'http://lorempixel.com/400/200',
        id:1,
        courseName:'Branding Basics',
        adderName:'Sprinklr',
        type:'ADDEDCARD',
        lessionScreenHeader:'Upload Video',
        chepaters:[
        {
          source:'https://www.youtube.com/embed/uLobCRtJb0c',
          id:0,
          placeholder:'',
          courseName:'Branding Basics',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
        ]

      },
      {
        imgLink:'http://lorempixel.com/400/200',
        id:2,
        courseName:'Illustration Much',
        adderName:'Sprinklr',
        type:'ADDEDCARD',
        lessionScreenHeader:'Upload Video',
        chepaters:[
        {
          source:'https://www.youtube.com/embed/1w-oQ-i1XB8',
          id:'125292332',
          placeholder:'',
          courseName:'Illustration Much',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
        ]
      },
      {
        imgLink:'http://lorempixel.com/400/200',
        id:3,
        courseName:'Toy Maker',
        adderName:'Sprinklr',
        type:'ADDEDCARD',
        lessionScreenHeader:'Upload Video',
        chepaters:[
        {
          source:'https://www.youtube.com/embed/fZKaq623y38',
          id:'125292332',
          placeholder:'',
          courseName:'Toy Maker',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
        ]
      },
      {
        imgLink:'http://lorempixel.com/400/200',
        id:4,
        courseName:'Water Color Magic',
        adderName:'Sprinklr',
        type:'ADDEDCARD',
        lessionScreenHeader:'Upload Video',
         chepaters:[
        {
          source:'https://www.youtube.com/embed/6I_GwgoGm1w',
          id:'125292332',
          placeholder:'',
          courseName:'Water Color Magic',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
        ]
      }
      ]
    }
  }
}

let store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

const App=({...props})=>(
    <div style={{height:'100%'}}>
      {props.children}
    </div>
  )

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={AvailableCourses}/>
        <Route path="courses/:courseId" component={CoursesDetail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app') 
)
