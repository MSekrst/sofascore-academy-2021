import bread from '../images/bread.jpg'
import flour from '../images/flour.jpeg'
import milk from '../images/milk.jpg'
import oil from '../images/oil.jpg'
import sugar from '../images/sugar.jpg'
import water from '../images/water.jpg'

// items for a web shop
const items = [
  {
    id: 1,
    name: 'Bread',
    price: 6.99,
    image: bread,
    description: 'Plain bread',
  },
  {
    id: 2,
    name: 'Milk',
    price: 4.59,
    image: milk,
    description: 'Milk carton',
  },
  {
    id: 3,
    name: 'Olive oil',
    price: 59.99,
    image: oil,
    description: 'Extra virgin olive oil',
  },
  {
    id: 4,
    name: 'Flour',
    price: 9.99,
    image: flour,
    description: 'Flour type 00',
  },
  {
    id: 5,
    name: 'Sugar',
    price: 6.99,
    image: sugar,
    description: 'White sugar',
  },
  {
    id: 6,
    name: 'Water',
    price: 4.99,
    image: water,
    description: 'Bottled water',
  },
]

/**
 * Function which simulates fetch request.
 * Returns Promise with data on success and error when window has apiError flag set to truthy value.
 */
export function getAllItems() {
  return new Promise((resolve, reject) => {
    if (window.apiError) {
      return reject(Error('Error while getting items!'))
    }

    return resolve(items)
  })
}

// IDs of not available items
let notAvailableItems = []

export function toggleItemAvailability(itemId) {
  if (notAvailableItems.includes(itemId)) {
    notAvailableItems = notAvailableItems.filter(id => id !== itemId)
  } else {
    notAvailableItems.push(itemId)
  }
}
