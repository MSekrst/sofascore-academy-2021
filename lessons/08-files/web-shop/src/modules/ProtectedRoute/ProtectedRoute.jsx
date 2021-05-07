import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { UserContext } from '../../context/UserContext'

export function ProtectedRoute({ children, roleRequired, ...routeProps }) {
  const { userRole } = useContext(UserContext)

  const redirectMarkup = <Redirect to="/login" />
  const routeMarkup = <Route {...routeProps}>{children}</Route>

  // if not logged in
  if (!userRole) {
    return redirectMarkup
  }

  // if special role exists
  if (typeof roleRequired !== 'undefined') {
    return roleRequired === userRole ? routeMarkup : redirectMarkup
  }

  return routeMarkup
}
