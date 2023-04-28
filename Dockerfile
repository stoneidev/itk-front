# base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install --only=production

# copy project files
COPY . .

# build the app
RUN npm run build

# set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# expose port
EXPOSE $PORT

# start the app
CMD ["npm", "start"]