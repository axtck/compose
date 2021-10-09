# Compose

***Docker compose examples***

---

## Environment variables 

* If you have multiple environment variables, you can substitute them by adding them to a default environment variable file named ```.env``` or by providing a path to your environment variables file with ```env_file```

* Docker Copmose only accepts ```${x}``` or ```$x``` environment variable notation from ````.env``` file in the root directory. 
