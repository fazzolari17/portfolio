FROM node:19

RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  && rm -rf /var/lib/apt/lists/*

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the rest of the application code to the container
COPY . .

# Install app dependencies
RUN npm install

# Allow development work in while running docker 
ENV WATCHPACK_POLLING=true

# Allow development work in while running docker 
ENV CHOKIDAR_USEPOLLING=true

# Define the command to run your app
CMD ["npm", "run", "dev"]