FROM node:16

WORKDIR /docker/app

RUN npm install

COPY . .

ENV MYSQL_HOST=db
ENV MYSQL_PORT=3306
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=p@ssw0rd
ENV MYSQL_DATABASE=cactus-client-project

EXPOSE 3306

CMD ["node", "App.jsx"]