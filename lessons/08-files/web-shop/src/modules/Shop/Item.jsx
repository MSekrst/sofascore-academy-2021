import './item.css'
import { AddShoppingCart } from '../../icons/AddShoppingCart'
import { RemoveShoppingCart } from '../../icons/RemoveShoppingCart'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Item({ item }) {
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext)

  const inCart = isInCart(item.id)

  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <div className="card-content">
        <div className="card-name">{item.name}</div>
        <p className="card-description">{item.description}</p>

        <div className="card-price">{item.price}Kn</div>

        {inCart ? (
          <RemoveShoppingCart onClick={() => removeFromCart(item.id)} />
        ) : (
          <AddShoppingCart onClick={() => addToCart(item)} />
        )}
      </div>
    </div>
  )
}
