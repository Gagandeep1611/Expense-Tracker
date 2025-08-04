#Node base image
FROM node:22.17.1-alpine

#Set working directory 
WORKDIR /app

#Copy package.json and package-lock.json
COPY package*.json ./

#install backend dependencies
RUN npm install

#Copy the rest of backend code
COPY . .
 
#Expose the backend port 
EXPOSE 8000

CMD ["npm", "run", "dev", "--", "--host"]