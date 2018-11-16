FROM node as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install # Optimization: cache dependency installation
COPY . ./
RUN npm run build

#FROM tobi312/rpi-nginx
#COPY html /var/www/html
#COPY nginx /etc/nginx/sites-enabled

FROM nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
