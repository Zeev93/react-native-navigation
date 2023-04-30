import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthStateProps {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}
export interface AuthContextProps {
    authState: AuthStateProps
    signIn: () => void
    logOut: () => void
    changeFavoriteIcon: (payload: string) => void
    setUserName: (payload: string) => void

}


// Estado Inicial
export const authInitialState: AuthStateProps = {
    username: undefined,
    isLoggedIn: false,
    favoriteIcon: undefined
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}:any) => {

    const [authState, dispatch] = useReducer( authReducer , authInitialState)


    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const changeFavoriteIcon = ( payload: string ) => {
        dispatch({type: 'changeFavoriteIcon', payload})
    }

    const logOut = () => {
        dispatch({ type: 'logOut'})
    }

    const setUserName = (payload: string) => {
        dispatch({type: 'setUserName', payload})
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logOut,
                setUserName,
                changeFavoriteIcon
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}