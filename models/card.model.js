const cards = [
  { id: Date.now(), suit: 'diamonds', value: 'queen', collection: 'royal' },
]

function genId() {
  return Date.now() + Math.floor(Math.random() * 1000)
}

export function create({ suit, value, collection }) {
  const card = { id: genId(), suit, value, collection }
  cards.push(card)
  return card
}

export function update(id, fields) {
  const idx = cards.findIndex((c) => c.id === id)
  if (idx === -1) return null
  cards[idx] = { ...cards[idx], ...fields }
  return cards[idx]
}

export function remove(id) {
  const idx = cards.findIndex((c) => c.id === id)
  if (idx === -1) return false
  cards.splice(idx, 1)
  return true
}

export { cards }
