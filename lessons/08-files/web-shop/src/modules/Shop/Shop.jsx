import { useEffect, useState } from 'react'
import { getAllItems } from '../../api/items'
import { Item } from './Item'
import './item.css'

export function Shop() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getAllItems()

        setItems(items)
      } catch (e) {
        // TODO: handle error
      }
    }

    fetchItems()
  }, [])

  return (
    <div className="cards-wrapper">
      {items.length > 0 ? items.map(item => <Item key={item.id} item={item} />) : <p>No items available</p>}
    </div>
  )
}
