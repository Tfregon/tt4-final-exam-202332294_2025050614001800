# Etapa 1: Build Angular
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Etapa 2: Runtime com Nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
