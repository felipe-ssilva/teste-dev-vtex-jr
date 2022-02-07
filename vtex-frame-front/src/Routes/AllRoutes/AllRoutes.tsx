import React, { ReactNode } from "react";
import {
    Route,
    Routes
} from "react-router-dom";
import { _DataRoutes, _RouteType } from "../Data/DataRoutes";
import { ProtectedRoute } from "./PrivateRoute";

const AllRoutes: React.FC<ReactNode> = (): JSX.Element => {

    return (
        <Routes>
            {_DataRoutes.publicRoutes.map((route: _RouteType, key:number) => {
                return (
                    <Route path={route.path} caseSensitive key={key} element={((Component: React.FC ) => <Component /> )(route.component)} />
                );
            })}

            <Route element={<ProtectedRoute />}>
                {_DataRoutes.privateRoutes.map((route: _RouteType, key: number) => {
                    return (
                        <Route path={route.path} caseSensitive key={key} element={((Component: React.FC ) => <Component /> )(route.component)} />
                    )
                })}
            </Route>
        </Routes>
    );
}


export { AllRoutes }