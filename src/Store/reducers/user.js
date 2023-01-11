import * as types from "../types";

const initialState = {
	username: "",
	loggedIn: false,
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_USER:
			localStorage.setItem(
				"user",
				JSON.stringify({ ...action.payload, loggedIn: true })
			);
			return (state = {
				...state,
				username: action.payload,
				loggedIn: true,
			});
		case types.LOGOUT:
			localStorage.clear();
			return initialState;
		default:
			return initialState;
	}
};

export default user;
