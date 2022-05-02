import { useCallback, useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { RemoveShoppingCart } from '../../icons/RemoveShoppingCart'
import { ShoppingCart } from '../../icons/ShoppingCart'
import './cart.css'

export function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeFromCart } = useContext(CartContext)

  const toggleIsOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <div className="cart-container">
      <ShoppingCart onClick={toggleIsOpen} fill="white" />
      {isOpen && (
        <div className="cart-menu">
          {items.length > 0 ? (
            items.map(item => (
              <div className="cart-item" key={item.id}>
                <img className="cart-image" src={item.image} alt="" />
                <div className="cart-content">
                  <span>{item.name}</span>
                  <span>{item.price}Kn</span>
                </div>
                <span>
                  <RemoveShoppingCart onClick={() => removeFromCart(item.id)} />
                </span>
              </div>
            ))
          ) : (
            <p>Shopping cart is empty</p>
          )}
        </div>
      )}
    </div>
  )
}
