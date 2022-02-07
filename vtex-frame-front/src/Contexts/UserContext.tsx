import React, { createContext } from 'react';
import { InitialDataUserContext, InitialDataUserContextType } from '../Static/Data/InitialDataUserContext';
import { ActionTypeReducer } from '../Reducer/UserReducer';

export type UserContextType = {
    userState: InitialDataUserContextType
    userDispatch: React.Dispatch<ActionTypeReducer>;
}

const UserContext = createContext<UserContextType>({
    userState: InitialDataUserContext,
    userDispatch: (): void => {}
});

export { UserContext };