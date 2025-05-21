# Stage 1: Build the Angular app
FROM node:24-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build -- --output-path=dist/app --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy built app to nginx html folder
COPY --from=builder /app/dist/app /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
