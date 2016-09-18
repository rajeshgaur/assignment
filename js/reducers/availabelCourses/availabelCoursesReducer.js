export default function availabelCoursesReducer(availabelCourses={},action) {
	switch(action.type){
		case 'ADD_NEW_CLASS':
			debugger;
			let len=availabelCourses.content.courses.length;
			let id=len;
			return Object.assign({},availabelCourses,{
				content:Object.assign({},availabelCourses.content,{
					courses:availabelCourses.content.courses.concat({
			        id:len,
			        imgLink:'http://lorempixel.com/400/200',
			        courseName:action.title,
			        adderName:'Sprinklr',
			        type:'ADDEDCARD',
			        lessionScreenHeader:'Upload Video',
			        chepaters:[]
					})
				})
			})
			break;
		case 'ADD_NEW_LESSON_TO_GIVEN_CLASS':
		debugger;
			let link=action.uploadForm.uploadLink
			let source,placeholder,courseName,description,lessonLen;
			source=link.indexOf('watch?v')>0?link.replace("watch?v=", "embed/"):link
			placeholder='',
			courseName=action.uploadForm.title
			description=action.uploadForm.description
			lessonLen=action.classId?availabelCourses.content.courses[action.classId].chepaters.length:0;

			let courses=availabelCourses.content.courses
			courses[action.classId]=Object.assign({},availabelCourses.content.courses[action.classId],{
								chepaters:availabelCourses.content.courses[action.classId].chepaters.concat({
						        id:lessonLen,
						        placeholder:'',
						        courseName:courseName,
						        description:description,
						        source:source
								})
							})
			return Object.assign({},availabelCourses,{
				content:Object.assign({},availabelCourses.content,{
					courses:courses
			})})
			break;
		default :
		  return availabelCourses;
		  break;
	}
}