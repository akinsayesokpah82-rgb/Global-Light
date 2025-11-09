# Backend - Global Light
Endpoints:
- POST /api/openai/chat { message, mode }
- POST /api/admin/seed -> seeds DB (run once)
- POST /api/facebook/post { message, link } -> posts to FB (requires tokens)

Run:
- npm install
- copy .env.example -> .env and fill values
- npm run seed
- npm run dev
