import React, { useReducer } from 'react';
import { getLocalUsername, setLocalUsername } from '../helpers/authService';

const UserContext = React.createContext();
const initialState = getLocalUsername() || undefined;

const updatedContextAndLocalUsername = (oldState, newState) => {
	setLocalUsername(newState);
	return newState;
};

export function UserContextProvider(props) {
	const [username, dispatch] = useReducer(updatedContextAndLocalUsername, initialState);
	const value = { username, dispatch };

	return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
}

export default UserContext;
