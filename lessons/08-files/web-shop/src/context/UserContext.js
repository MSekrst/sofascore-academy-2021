import { createContext } from 'react'

// if role is set to truthy value user is logged in
export const UserContext = createContext({ userRole: '', setUserRole: () => {} })
