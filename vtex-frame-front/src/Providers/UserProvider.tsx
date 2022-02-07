import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { FirebaseAuth } from "../Firebase/Initial";
import { UserReducer } from "../Reducer/UserReducer";
import { InitialDataUserContext, PopPupInitialUpdate } from "../Static/Data/InitialDataUserContext";
import { _LocalStorage } from "../Static/LocalStorage";



const UserProvider:React.FC<ReactNode> = ({children}): JSX.Element => {
    
    
    const [ userState, userDispatch ] = useReducer(UserReducer,InitialDataUserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe =  FirebaseAuth.onAuthStateChanged(user => {
       
            if (user) {
                
                userDispatch({
                    type: "UPDATE-INITIAL-LOGIN",
                    payload: {
                        user: user,
                        token: localStorage.getItem(_LocalStorage.__accessToken),
                        isAuth: true,
                    } as PopPupInitialUpdate
                });
        
                return () => {
                    unsubscribe()
                }
            } else {
                navigate('/login', {replace: true});
            }
        });
      }, [navigate, userDispatch]);

    return (
        <UserContext.Provider value={{userState, userDispatch}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserCoontext = () => useContext(UserContext);

export { UserProvider };