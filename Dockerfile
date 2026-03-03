FROM node:18-alpine
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install
CMD ["node", "index.js"]
