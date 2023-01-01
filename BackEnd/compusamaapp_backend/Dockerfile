FROM  node:alpine3.14

WORKDIR /opt/web-app/server
COPY server.js *.json .js ./*.js ./ 
RUN npm i
EXPOSE 8080
CMD ["compusamatest","server.js"]
