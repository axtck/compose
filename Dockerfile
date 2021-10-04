# dockerfile
FROM node:16-alpine

# create app dir
WORKDIR /usr/src/app

# copy package.json & package.lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# bundle src
COPY . .

# map port 
EXPOSE 3001 

# start server ($ node server.js)
CMD ["node", "src/server.js"]