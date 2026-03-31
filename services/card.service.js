import * as model from '../models/card.model.js'

export function getPaginatedCards(page = 1, limit = 10) {
  const totalCards = model.cards.length
  const totalPages = Math.max(1, Math.ceil(totalCards / limit))
  const currentPage = Math.min(Math.max(1, page), totalPages)
  const start = (currentPage - 1) * limit
  const cards = model.cards.slice(start, start + limit)

  const nextPage = currentPage < totalPages ? { page: currentPage + 1, limit } : null
  const previousPage = currentPage > 1 ? { page: currentPage - 1, limit } : null

  return {
    totalCards,
    totalPages,
    currentPage,
    limit,
    cards,
    next: nextPage,
    previous: previousPage,
  }
}

export function getCardById(id) {
  return model.cards.find((c) => c.id === id)
}

export function createCard({ suit, value, collection }) {
  const card = model.create({ suit, value, collection })
  return card
}

export function updateCard(id, fields) {
  return model.update(id, fields)
}

export function deleteCard(id) {
  return model.remove(id)
}
