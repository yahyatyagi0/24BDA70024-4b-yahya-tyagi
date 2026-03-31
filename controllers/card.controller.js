import * as service from '../services/card.service.js'

export async function getAllCards(req, res) {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10
  const result = service.getPaginatedCards(page, limit)
  res.json(result)
}

export async function getCardById(req, res) {
  const id = Number(req.params.id)
  const card = service.getCardById(id)
  if (!card) return res.status(404).json({ message: 'Card not found' })
  res.json(card)
}

export async function createCard(req, res) {
  const { suit, value, collection } = req.body
  if (!suit || !value) return res.status(400).json({ message: 'suit and value are required' })
  const card = service.createCard({ suit, value, collection })
  res.status(201).json(card)
}

export async function updateCard(req, res) {
  const id = Number(req.params.id)
  const updated = service.updateCard(id, req.body)
  if (!updated) return res.status(404).json({ message: 'Card not found' })
  res.json(updated)
}

export async function deleteCard(req, res) {
  const id = Number(req.params.id)
  const removed = service.deleteCard(id)
  if (!removed) return res.status(404).json({ message: 'Card not found' })
  res.status(204).send()
}
