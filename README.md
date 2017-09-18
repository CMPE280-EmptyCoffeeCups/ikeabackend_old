# CMPE280 - IKEA Backend APIs


### Start Developing

To start:
1. Clone your fork of the repo.
1. `$ cd <App root>`
1. `$ npm install`
1. 1. Switch to branch `develop`


##### If you want to make changes in the API:
1. Install swagger `sudo npm install -g swagger`
1. Make changes in `./api/swagger/swagger.yaml`
1. At app root `$ swagger project start`
1. Start modifying controllers.

##### If you just want to run the backend server
1. At app root `npm start`


### Swagger UI

This is how you can run swagger-ui to check and test your APIs
1. `$ docker pull swaggerapi/swagger-ui`
1. At the project root `$ docker run -p 80:8080 -e SWAGGER_JSON=/foo/swagger.yaml -v $(pwd)/api/swagger/:/foo swaggerapi/swagger-ui`
1. Go to `http://localhost`


### MySQL on AWS - setup in mysql workbench
    
1. Go to Step 2 here : https://aws.amazon.com/getting-started/tutorials/create-mysql-db/
1. End Point : mysql-cmpe280.c4lhvu8c7j2x.us-east-1.rds.amazonaws.com
3. Port: 3306
4. Username: admin
5. Password: adminmysq
6. DB: cmpe280ikeamysql

