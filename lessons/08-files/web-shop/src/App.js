import { useCallback, useState } from 'react'
import { CartContext } from './context/CartContext'
import { Header } from './modules/Layout/Header'
import { Shop } from './modules/Shop/Shop'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

function ProtectedRoute({ children, ...routeProps }) {
  const isLoggedIn = true

  return isLoggedIn ? <Route {...routeProps}>{children}</Route> : <Redirect to="/login" />
}

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = useCallback(
    newItem => {
      setCartItems([...cartItems, newItem])
    },
    [cartItems]
  )

  const removeFromCart = useCallback(
    itemId => {
      setCartItems(cartItems.filter(i => i.id !== itemId))
    },
    [cartItems]
  )

  const isInCart = useCallback(
    itemId => {
      return cartItems.some(i => i.id === itemId)
    },
    [cartItems]
  )

  return (
    <>
      <CartContext.Provider value={{ items: cartItems, addToCart, removeFromCart, isInCart }}>
        <Header />

        <main style={{ marginTop: 60, padding: '16px 0' }}>
          <BrowserRouter>
            <Switch>
              <ProtectedRoute exact path="/">
                <Shop />
              </ProtectedRoute>
              <Route path="/login">Login</Route>
              <Route path="*">Page not found</Route>
            </Switch>
          </BrowserRouter>
        </main>
      </CartContext.Provider>
    </>
  )
}

export default App
