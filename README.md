# MasterEd — Premium EdTech Integration Platform (Scaffold)

This repo contains an initial scaffold for the MasterEd platform (frontend + backend) to run locally via Docker Compose.

Quick start (dev):

- Ensure Docker & Docker Compose are installed
- Run: docker-compose up --build
- Frontend will be available at: http://localhost:3000
- Backend will be available at: http://localhost:5000

Notes:
- This scaffold provides a minimal Next.js frontend skeleton and a NestJS-like backend with sample modules (auth, users, classrooms).
- Integrations (Google Classroom, LeetCode, W3Schools), OAuth, production auth flows, DB migrations, and robust CI are next steps.

Staging & Deployment
- A staging compose and deploy workflow are included: see `docker-compose.staging.yml` and `.github/workflows/deploy-staging.yml`.
- The staging compose uses Traefik to provision TLS via Let's Encrypt; fill `.env` from `.env.example` before deploying.

Next actions (I can implement):
- Full Next.js app with TypeScript, Tailwind, Framer Motion components, and route guards
- NestJS backend with Prisma, Postgres migrations, Redis, JWT refresh token rotation, RBAC guards
- Google OAuth flow and secure token storage
- WebSockets for real-time chat
- CI / CD, Helm charts, and Terraform for infra

If you'd like me to continue, tell me which area to prioritize or if I should proceed to implement the full stack features iteratively.
