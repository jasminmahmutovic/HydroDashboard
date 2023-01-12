# base image
FROM nginx:alpine

COPY deployment/default.conf /etc/nginx/conf.d

COPY build /usr/share/nginx/html