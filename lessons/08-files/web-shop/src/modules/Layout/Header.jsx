import { Cart } from '../Cart/Cart'
import './header.css'

export function Header() {
  return (
    <header>
      <div>Web Shop</div>
      <div>
        <Cart />
      </div>
    </header>
  )
}
