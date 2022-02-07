import { User } from "firebase/auth"

interface InitialDataUserContextType {
    [key: string]: any, 
    user: User | undefined,
    token: string | undefined
    isAuth: boolean
    openMenuUser: boolean
}

interface PopPupInitialUpdate {
    user: User | undefined,
    token: string | undefined
    isAuth: boolean
}

const InitialDataUserContext: InitialDataUserContextType = {
    user: undefined,
    token: undefined,
    isAuth: false,
    openMenuUser: false
}

export type { InitialDataUserContextType, PopPupInitialUpdate }
export { InitialDataUserContext }