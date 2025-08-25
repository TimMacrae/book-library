import {Navigate, Outlet} from "react-router-dom";
import {routerConfig} from "./routerConfig.ts";
import {LoadingSpinner} from "../components/LoadingSpinner.tsx";
import type {User} from "../types/userType.ts";

type ProtectedRouteProps = {
    user:User,
}

export function ProtectedRoute({user}: ProtectedRouteProps) {
    if(user ===  undefined) {
        return <LoadingSpinner />
    }

    if(!user) {
       return <Navigate to={routerConfig.URL.LOGIN}/>
    }

    return (<Outlet />)
}