export const selectUser = (user) => {
	console.log("You click", user.first);

	return{
		type: "USER_SELECTED",
		payload: user
	}
};