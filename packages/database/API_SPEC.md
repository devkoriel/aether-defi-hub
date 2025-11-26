# Aether API Specification

Base URL: `/api/v1`

## Authentication
Authentication is handled via Wallet Signatures (SIWE - Sign In With Ethereum).
- **Header**: `Authorization: Bearer <jwt_token>`

## Endpoints

### Users
- `POST /auth/login`: Verify signature and return JWT.
  - Body: `{ message, signature, address }`
- `GET /users/me`: Get current user profile and settings.
- `PATCH /users/me/settings`: Update settings (theme, currency).

### Portfolio & Assets
- `GET /portfolio`: Get aggregated portfolio value across chains.
  - Query: `?chains=1,137,42161`
- `GET /portfolio/history`: Get historical net worth data (for charts).

### Transactions
- `GET /transactions`: Get user transaction history.
  - Query: `?limit=20&offset=0&type=SWAP`
- `POST /transactions/sync`: Force sync transactions from blockchain for the connected wallet.

### Watchlist
- `GET /watchlist`: Get user's watched tokens.
- `POST /watchlist`: Add token to watchlist.
  - Body: `{ symbol: "ETH" }`
- `DELETE /watchlist/:symbol`: Remove token.

### AI Insights
- `GET /insights/:symbol`: Get AI prediction for a specific token.
- `GET /insights/trending`: Get top tokens with high AI confidence scores.

## Real-time Events (WebSocket)
- `/ws/prices`: Real-time price updates.
- `/ws/notifications`: Push notifications for transaction completion or price alerts.
