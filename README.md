# GitHub Actions Lab

A minimal Node.js and Express API for practicing CI/CD with GitHub Actions. The app is intentionally small so the focus can stay on automation workflows such as installing dependencies, building a Docker image, running smoke checks, and preparing deployment steps.

## What This Project Includes

- Express server running on port `8080`
- Root API endpoint for a basic response check
- Health endpoint for CI/CD smoke tests
- Dockerfile for containerizing the app
- Docker Compose file for local container runs
- Locked npm dependencies through `package-lock.json`

## Tech Stack

- Node.js
- Express
- Docker
- Docker Compose
- GitHub Actions

## Project Structure

```text
.
├── Dockerfile
├── docker-compose.yml
├── index.js
├── package.json
├── package-lock.json
├── .dockerignore
└── .gitignore
```

## API Endpoints

### `GET /`

Returns a basic hello response.

```json
{
  "message": "Hello World"
}
```

### `GET /health`

Returns a health-check response that can be used by CI/CD pipelines or deployment platforms.

```json
{
  "message": "Server is running and healthy"
}
```

## Prerequisites

Install the following tools before running the project:

- Node.js 22 or later recommended
- npm
- Docker
- Docker Compose

The Dockerfile uses the `node:22-alpine` image, so using Node.js 22 locally keeps the local and container environments consistent.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The app will run at:

```text
http://localhost:8080
```

Test the endpoints:

```bash
curl http://localhost:8080
curl http://localhost:8080/health
```

## Run With Docker

Build the Docker image:

```bash
docker build -t github-actions-lab:1.0 .
```

Run the container:

```bash
docker run --rm -p 8080:8080 github-actions-lab:1.0
```

Open:

```text
http://localhost:8080
```

## Run With Docker Compose

Build and start the service:

```bash
docker compose up --build
```

Stop the service:

```bash
docker compose down
```

## npm Scripts

| Script | Description |
| --- | --- |
| `npm start` | Starts the Express server using `node index.js` |

## CI/CD Practice Ideas

This repository is useful for learning GitHub Actions because it has a simple app surface and a Docker build target. Some practical workflow exercises are:

1. Install dependencies with `npm ci`
2. Check that the application starts successfully
3. Build the Docker image
4. Run the container inside the workflow
5. Test the `/health` endpoint with `curl`
6. Tag the Docker image with the commit SHA
7. Push the Docker image to Docker Hub, GitHub Container Registry, or another registry
8. Add a deployment job after the build succeeds
