#!/bin/bash
set -e

COMPOSER_MEMORY_LIMIT=-1 composer update
COMPOSER_MEMORY_LIMIT=-1 composer dumpautoload

php artisan config:cache
php artisan key:generate

# Clear all the possible cache
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan config:cache
php artisan passport:keys
php artisan migrate

php artisan queue:work --daemon &

exec "$@"
