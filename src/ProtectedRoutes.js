import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Context } from './services/Context'

export const ProtectedRoutes = ({ component: Component, cart, loadCart, ...rest }) => {
  const authContext = useContext(Context);
  return (
    <Route {...rest} render={props => {
      if (authContext.isLoggedIn) {
        return <Component cart={cart} loadCart={loadCart} {...props} />
      } else {
        return <Redirect to={
          {
            pathname: "/login",
            state: { from: props.location }
          }
        } />
      }
    }}
    />
  )
}
