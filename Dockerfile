FROM tobi312/rpi-nginx
COPY html /var/www/html
COPY nginx /etc/nginx/sites-enabled
