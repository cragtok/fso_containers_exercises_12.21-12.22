FROM node:23.4.0-bookworm-slim as test-stage
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci
RUN npm run test

FROM test-stage as build-stage
WORKDIR /usr/src/app
RUN npm ci --omit=dev
RUN npm run build

FROM build-stage as run-stage
WORKDIR /usr/src/app
COPY --from=build-stage /usr/src/app/dist /usr/src/app/dist
COPY --from=build-stage /usr/src/app/node_modules /usr/src/app/node_modules
USER node
CMD ["npm" ,"run", "start:prod"]
