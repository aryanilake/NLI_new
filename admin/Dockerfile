FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
# to make react-router work with nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]