FROM node:lts
EXPOSE 8080
LABEL org.opencontainers.image.source="https://github.com/navikt/arbeidstiltak-visning"
LABEL org.opencontainers.image.title="arbeidstiltak-visning-labs"
WORKDIR /arbeidstiltak-visning-labs

COPY package.json /arbeidstiltak-visning-labs/package.json
COPY package-lock.json /arbeidstiltak-visning-labs/package-lock.json

RUN npm install
RUN npm build
RUN npm install -g json-server

COPY ../../build /arbeidstiltak-visning-labs/build
COPY ../../mock /arbeidstiltak-visning-labs/mock

#CMD ["npm", "i", "-g", "json-server"]
CMD [ "json-server", "--watch", "/arbeidstiltak-visning-labs/mock/db.json", "--static", "/arbeidstiltak-visning-labs/build/", "--host", "0.0.0.0", "--port", "8080", "--routes", "/arbeidstiltak-visning-labs/mock/routes.json" ]
