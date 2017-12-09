# Wolfbeacon Analytics Dashboard

This React app aggregates all the API data and presents it in a visually pleasing form.

#### Running in development

- Clone the repository

  ```bash
  git clone https://github.com/wolfbeacon/wolfbeacon-analytics-dashboard
  ```

- Enter into the repo and install npm packages

  ```bash
  cd wolfbeacon-analytics-dashboard
  npm install
  ```

- Run the compiled frontend 

  ```bash
  npm start
  ```

#### Running in production using Docker

- Build a docker image

  ```
  docker build -t wolfbeacon-analytics-dashboard .
  ```

- Run the docker image

  ```
  docker run -p 8000:8000 wolfbeacon-analytics-dashboard
  ```

The website should be up and running on *localhost:3000*