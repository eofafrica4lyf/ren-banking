FROM node:alpine as builder
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -la /app
# EXPOSE 3000
# RUN npm run deploy

FROM nginx
EXPOSE 3000
RUN ls -la /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
RUN ls -la /usr/share/nginx/html
