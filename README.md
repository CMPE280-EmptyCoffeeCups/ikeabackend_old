# CMPE280 - IKEA Backend APIs


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
