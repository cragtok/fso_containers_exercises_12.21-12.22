FROM node:23.4.0-bookworm-slim as build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
ENV NODE_ENV=production
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
