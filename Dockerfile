FROM nginx:stable-alpine
LABEL org.opencontainers.image.source="https://github.com/navikt/arbeidstiltak-visning"
COPY build /usr/share/nginx/html
