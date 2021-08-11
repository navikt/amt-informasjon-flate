FROM node:lts
LABEL org.opencontainers.image.source="https://github.com/navikt/arbeidstiltak-visning"
LABEL org.opencontainers.image.title="arbeidstiltak-visning-labs"
WORKDIR /arbeidstiltak-visning

COPY . /arbeidstiltak-visning/

RUN npm install
RUN npm run build
RUN npm install -g json-server

#COPY build build/
COPY mock/ /arbeidstiltak-visning/mock/

CMD [ "json-server", "/arbeidstiltak-visning/mock/db.json", "--static", "/b:uild", "--routes", "/arbeidstiltak-visning/mock/routes.json", "--host", "0.0.0.0", "--port", "8080"]