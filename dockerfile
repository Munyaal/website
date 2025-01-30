# Esta es una imagen de node.js
FROM node:22.13.0-alpine3.21

# Establece el directorio de trabajo
WORKDIR /usr/app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package*.json .

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Establece la variables de entorno
ENV NODE_ENV=development

# Expone el puerto de la aplicación
EXPOSE 4321
