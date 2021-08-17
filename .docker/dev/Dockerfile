FROM nginx:stable-alpine
LABEL org.opencontainers.image.source="https://github.com/navikt/arbeidstiltak-visning"
LABEL org.opencontainers.image.title="arbeidstiltak-visning-dev"
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
