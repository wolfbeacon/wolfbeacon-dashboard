FROM node:alpine

# Create work directory
RUN mkdir /src/
WORKDIR /src/
COPY . /src/

# Install and configure serve
RUN npm install -g serve
CMD ["serve", "-p 8000", "-s build"]
EXPOSE 8000

# Install dependencies
RUN npm install

# Build react files
RUN npm run build --production