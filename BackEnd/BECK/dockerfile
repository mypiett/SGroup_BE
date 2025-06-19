FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env .env
# RUN npm run build


CMD ["npm", "run", "dev"]