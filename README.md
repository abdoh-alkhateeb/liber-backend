# Liber Backend

This is the backend service for the **Liber Platform**, built with Node.js and Express, connected to a MongoDB database.

## Prerequisites

- Node.js (v14 or later)
- MongoDB instance (local or cloud)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abdoh-alkhateeb/liber-backend.git
cd liber-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=<your-mongo-connection-string>
```

### 4. Start the development server

```bash
npm start
```

The server will start on port 5000.
