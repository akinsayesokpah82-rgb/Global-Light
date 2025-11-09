# Global Light — Full Project (Professional Build)

Creator: Akin S. Sokpah
Email: sokpahakinsaye81@gmail.com
Facebook: https://www.facebook.com/profile.php?id=61583456361691

This repo contains:
- backend/: Express server with OpenAI integration, scheduler, Facebook posting placeholder, DB seed.
- frontend/: React app with AR demo (three.js), speech synthesis, PWA support, Tailwind placeholders.
- .github/workflows/ci-deploy.yml for CI on push.
- render.yaml to help auto-deploy.

## Local setup

### Backend
1. cd backend
2. npm install
3. copy .env.example -> .env and fill values including OPENAI_API_KEY and FB_PAGE_ACCESS_TOKEN (if you want FB posts).
4. npm run seed
5. npm run dev

### Frontend
1. cd frontend
2. npm install
3. npm run dev

## Render deployment (recommended)
1. Create two services on Render:
   - Web Service (backend) -> Root: backend, Start command: `npm start`
   - Static Site (frontend) -> Root: frontend, Build command: `npm install && npm run build`, Publish directory: `dist`
2. Add environment variables on Render dashboard:
   - OPENAI_API_KEY, MONGODB_URI, JWT_SECRET, FB_PAGE_ACCESS_TOKEN, FB_PAGE_ID, CREATOR_NAME, CREATOR_EMAIL
3. Deploy and monitor logs.

## Notes
- Facebook posting requires a Page Access Token and Page ID. Generate via Facebook Developer console and grant `pages_manage_posts` permission.
- The virtual number/SMS flow uses Twilio; you must use your Twilio credentials.
- This is a professional scaffold — you should audit the OpenAI prompts and moderation for production use.

