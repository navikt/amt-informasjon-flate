FROM nginx:stable-alpine
LABEL org.opencontainers.image.source="https://github.com/navikt/amt-informasjon-flate"
LABEL org.opencontainers.image.title="amt-informasjon-flate-dev"
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
