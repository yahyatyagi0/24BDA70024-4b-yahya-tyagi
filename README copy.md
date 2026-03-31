# Card Collection API

A simple REST API for managing a collection of playing cards built with Express.js.

## Features

- CRUD operations for cards (Create, Read, Update, Delete)
- Pagination support for listing cards
- In-memory data storage
- CORS enabled
- ES modules support

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server with auto-restart

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage

### Development Server

Start the development server with auto-restart:
```bash
pnpm run dev
```

### Production Server

Start the production server:
```bash
pnpm start
```

The server will run on `http://localhost:3000` by default, or use the `PORT` environment variable.

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Cards Endpoints

#### GET /
Returns a welcome message.

**Response:**
```json
{
  "message": "Welcome to the card collection API"
}
```

#### GET /cards
Get all cards with pagination.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response:**
```json
{
  "totalCards": 1,
  "totalPages": 1,
  "currentPage": 1,
  "limit": 10,
  "cards": [
    {
      "id": 1708272000000,
      "suit": "diamonds",
      "value": "queen",
      "collection": "royal"
    }
  ],
  "next": null,
  "previous": null
}
```

#### GET /cards/:id
Get a specific card by ID.

**Parameters:**
- `id`: Card ID (number)

**Response (Success):**
```json
{
  "id": 1708272000000,
  "suit": "diamonds",
  "value": "queen",
  "collection": "royal"
}
```

**Response (Not Found):**
```json
{
  "message": "Card not found"
}
```

#### POST /cards
Create a new card.

**Request Body:**
```json
{
  "suit": "hearts",
  "value": "ace",
  "collection": "standard"
}
```

**Required Fields:**
- `suit`: Card suit (string)
- `value`: Card value (string)

**Optional Fields:**
- `collection`: Collection name (string)

**Response:**
```json
{
  "id": 1708272001000,
  "suit": "hearts",
  "value": "ace",
  "collection": "standard"
}
```

#### PUT /cards/:id
Update an existing card.

**Parameters:**
- `id`: Card ID (number)

**Request Body:**
```json
{
  "suit": "spades",
  "value": "king"
}
```

**Response (Success):**
```json
{
  "id": 1708272000000,
  "suit": "spades",
  "value": "king",
  "collection": "royal"
}
```

**Response (Not Found):**
```json
{
  "message": "Card not found"
}
```

#### DELETE /cards/:id
Delete a card.

**Parameters:**
- `id`: Card ID (number)

**Response (Success):** 204 No Content

**Response (Not Found):**
```json
{
  "message": "Card not found"
}
```

## Project Structure

```
├── index.js              # Main application entry point
├── package.json          # Project dependencies and scripts
├── pnpm-lock.yaml        # Lock file for pnpm
├── controllers/
│   └── card.controller.js # Request handlers for card routes
├── models/
│   └── card.model.js     # Data model and in-memory storage
├── routes/
│   └── card.routes.js    # Route definitions
└── services/
    └── card.service.js   # Business logic layer
```

## Card Model

Each card has the following properties:

- `id`: Unique identifier (number, auto-generated)
- `suit`: Card suit (string, e.g., "hearts", "diamonds", "clubs", "spades")
- `value`: Card value (string, e.g., "ace", "2", "3", ..., "10", "jack", "queen", "king")
- `collection`: Collection name (string, optional)

## Error Handling

The API returns appropriate HTTP status codes:

- `200`: Success
- `201`: Created
- `204`: No Content (for DELETE)
- `400`: Bad Request (missing required fields)
- `404`: Not Found (card not found)

## Development

This project uses ES modules (`"type": "module"` in package.json). All imports and exports follow ES module syntax.

Data is stored in memory and will be lost when the server restarts. For production use, consider implementing persistent storage (database).</content>
<parameter name="filePath">c:\Users\ASUS\OneDrive\Desktop\my stuff\24bda70134-4b-manasguleria\README.md