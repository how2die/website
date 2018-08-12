FROM tobi312/rpi-nginx
COPY html /var/www/html
COPY nginx-config /etc/nginx/sites-enabled
