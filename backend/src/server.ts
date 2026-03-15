{
  "name": "backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "ts-node-dev --respawn src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "@prisma/client": "^5.4.2",
    "telegraf": "^4.15.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.20",
    "@types/node": "^20.8.7",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.2.2",
    "prisma": "^5.4.2"
  }
}
