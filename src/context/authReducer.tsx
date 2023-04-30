import { AuthStateProps } from "./AuthContext";


type AuthAction = | { type: 'signIn' } | { type: 'changeFavoriteIcon', payload: string }
    | { type: 'logOut' } | { type: 'setUserName', payload:string }


export const authReducer = (state: AuthStateProps, action: AuthAction): AuthStateProps  => {

    switch (action.type) {
        
        case "signIn":
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username'
            }
        case "changeFavoriteIcon":
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }

        case 'setUserName':
            return {
                ...state,
                username: action.payload
            }
            
        default:
            return state
    }
}