# Stage 1: Build the Angular app
FROM node:23-slim

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

COPY package.json package-lock.json ./
RUN npm install

COPY . .
# RUN npm run build -- --output-path=dist/app --configuration production

# # Stage 2: Serve the app with Nginx
# FROM nginx:alpine

# # Copy built app to nginx html folder
# COPY --from=builder /app/dist/app /usr/share/nginx/html

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
