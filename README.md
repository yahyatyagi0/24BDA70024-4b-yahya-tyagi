# 24BDA70024-4b-yahya-tyagi

## Assignment Submission

**Student ID:** 24BDA70024  
**Name:** Yahya Tyagi  
**Assignment:** 4b - Playing Card API  

## Project Description

This project implements a simple Playing Card API using Node.js and Express. The API provides endpoints to manage a deck of playing cards, including shuffling, dealing cards, and retrieving card information.

## Features

- Create a new deck of 52 cards
- Shuffle the deck
- Deal cards from the deck
- Get remaining cards count
- Reset the deck

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yahyatyagi0/24BDA70024-4b-yahya-tyagi.git
   cd 24BDA70024-4b-yahya-tyagi/playing-card-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Or start the production server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000` (or the port specified in the code).

## API Endpoints

- `GET /deck` - Get the current deck
- `POST /shuffle` - Shuffle the deck
- `POST /deal` - Deal a card
- `GET /count` - Get remaining cards count
- `POST /reset` - Reset the deck

## Project Structure

```
playing-card-api/
├── package.json
├── package-lock.json
├── server.js
└── node_modules/
```

## Contributing

This is an assignment submission. For any questions, please contact the instructor.

## License

This project is for educational purposes only.