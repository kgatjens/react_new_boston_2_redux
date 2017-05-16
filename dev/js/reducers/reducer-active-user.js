export default function (state=null, action){
	console.log(action.type);
	switch(action.type){
		case "USER_SELECTED":
			return action.payload;
			break;
	}
	return state;
}