import React from "react";
import { HomePage } from "../../Pages/Home.page";
import { LoginPage } from "../../Pages/Login.page";

interface _DataRoutesType {
    privateRoutes: Array<_RouteType>
    publicRoutes: Array<_RouteType>
}

interface _RouteType {
    name: string,
    path: string,
    component: React.FC,
}


const _DataRoutes:_DataRoutesType = {    
    privateRoutes: [
        {
            name: "home",
            path: "/",
            component: HomePage,
        }
    ],
    publicRoutes: [
        {
            name: "login",
            path: '/login',
            component: LoginPage,
        },
    ]
};


export type { _RouteType };
export { _DataRoutes };