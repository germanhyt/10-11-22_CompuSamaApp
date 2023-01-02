FROM  node:alpine3.14

WORKDIR /opt/web-app/app
COPY server.js *.json ./ 
RUN npm i
COPY . .
EXPOSE 3000
CMD ["node","server.js"]
