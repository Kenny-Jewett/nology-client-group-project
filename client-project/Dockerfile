FROM node:16
WORKDIR /usr/app/
COPY ./ /usr/app/

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm
RUN apt-get install npm -y
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
