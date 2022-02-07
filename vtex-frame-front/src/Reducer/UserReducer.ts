import { InitialDataUserContextType } from "../Static/Data/InitialDataUserContext"

export type ActionTypeReducer = {
    type: "UPDATE-USER" | "UPDATE-INITIAL-LOGIN" | "OPEN-MENU";
    fildName?: "user";
    payload: any
}

const setUserState = (state: InitialDataUserContextType, payload: any) => {
    if(typeof payload !== "undefined") return payload;
    return state.user;
}

const updateStateInitialLogin = (state: InitialDataUserContextType, payload: any) => {

    for(let key in payload) {
        if(key in state) {
            state[key] = payload[key];
        }
    }  
  
    return {...state};
} 

const UserReducer = (state: InitialDataUserContextType, action: ActionTypeReducer) => {

    const { payload, type, fildName } = action;

    switch (type) {
        case "UPDATE-USER":
            return {
                [fildName!]: setUserState(state, payload)
            } as InitialDataUserContextType;

        case "UPDATE-INITIAL-LOGIN":
            return updateStateInitialLogin(state, payload);
        case "OPEN-MENU":
            return {
                ...state,
                openMenuUser: !state.openMenuUser
            } as InitialDataUserContextType;
        default:
            return {...state};
    }
}

export { UserReducer };