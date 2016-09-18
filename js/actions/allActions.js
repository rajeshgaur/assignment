export function addNewClass(title,description) {
	return{
		title:title,
		description:description,
		type:'ADD_NEW_CLASS'
	}
}

export function addNewLessonInGivenClass(uploadForm,classId){
	return{
		uploadForm:uploadForm,
		classId:classId,
		type:'ADD_NEW_LESSON_TO_GIVEN_CLASS'
	}
}