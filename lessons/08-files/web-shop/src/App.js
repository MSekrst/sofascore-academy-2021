import { useCallback, useState } from 'react'
import { CartContext } from './context/CartContext'
import { Header } from './modules/Layout/Header'
import { Shop } from './modules/Shop/Shop'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './modules/Login/Login'
import { UserContext } from './context/UserContext'
import { ProtectedRoute } from './modules/ProtectedRoute/ProtectedRoute'
import { usePersistedState } from './hooks/usePersistedState'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [userRole, setUserRole] = usePersistedState('webShop-user', '')

  const addToCart = useCallback(newItem => {
    setCartItems(prev => [...prev, newItem])
  }, [])

  const removeFromCart = useCallback(itemId => {
    setCartItems(prev => prev.filter(i => i.id !== itemId))
  }, [])

  const isInCart = useCallback(
    itemId => {
      return cartItems.some(i => i.id === itemId)
    },
    [cartItems]
  )

  return (
    <>
      <UserContext.Provider value={{ userRole, setUserRole }}>
        <CartContext.Provider value={{ items: cartItems, addToCart, removeFromCart, isInCart }}>
          <Header />

          <main style={{ marginTop: 60, padding: '16px 0' }}>
            <BrowserRouter>
              <Switch>
                <ProtectedRoute exact path="/">
                  <Shop />
                </ProtectedRoute>

                <ProtectedRoute exact roleRequired="admin" path="/dashboard">
                  <p>Dashboard</p>
                </ProtectedRoute>

                <Route path="/login">
                  <Login />
                </Route>

                <Route path="*">
                  <p>Page not found</p>
                </Route>
              </Switch>
            </BrowserRouter>
          </main>
        </CartContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
