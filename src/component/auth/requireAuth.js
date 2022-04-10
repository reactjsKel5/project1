import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"
import { useAuth } from "./auth"

// export const RequireAuth = ({ children }) => {
//     const auth = useAuth()

//     if(!auth.user) {
//         return <Redirect to='/login'/>
//     }

//     return children
// }

export function RequireAuth({ children, ...rest }){
    const auth = useAuth()

    return (
        <Route 
            {...rest}
            render={({ location }) =>
        auth.user ? (
            children
        ) : (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            />
        )}
        />
    )
}