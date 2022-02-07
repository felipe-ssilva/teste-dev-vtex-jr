import React, { ReactNode } from "react";
import {
    BrowserRouter,
} from "react-router-dom";
import { FirebaseAuth } from "../Firebase/Initial";
import { UserProvider } from "../Providers/UserProvider";
import { AllRoutes } from "./AllRoutes/AllRoutes";





const MainRoutes:React.FC<ReactNode> = ():JSX.Element => {
    
    FirebaseAuth.useDeviceLanguage();
    
    return (
        <BrowserRouter>
            <UserProvider>
                <AllRoutes />
            </UserProvider>
        </BrowserRouter>
    );
}


export { MainRoutes }