FROM node:10.16.0
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
RUN npm install node-sass
COPY . .
RUN npm rebuild bcrypt --build-from-source
CMD ["npm", "run", "start"]

