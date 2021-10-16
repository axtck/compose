# Compose

***Docker Compose example usage (with NodeJS and MySQL)***

---

## Usage

```bash
# clone repo
git clone https://github.com/axtck/compose.git
npm install

# setup .env files (https://github.com/axtck/compose#environment-variables)

# start Docker
# run services with Docker Compose
npm run compose

# take a look at the other possible commands in package.json
```

---

## Environment variables 

* If you have multiple environment variables, you can substitute them by adding them to a default environment variable file named ```.env``` or by providing a path to your environment variables file with ```env_file```.

* Docker Copmose only accepts ```${x}``` or ```$x``` environment variable notation from ```./.env```. 

* Copy the ```x.env.sample``` files in ```./docker/env``` and ```./``` and rename them to ```x.env``` (replace ```x``` with service name). Keep in mind that the variables have to point to the correct value inside the container (for example the ```MYSQL_PORT``` in ```docker.server-main.env``` should point to the port from Docker (3306), not the port on the host machine (3307 or what port you mapped it to))
