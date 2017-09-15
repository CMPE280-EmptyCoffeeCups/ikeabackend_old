# CMPE280 - IKEA Backend APIs


### Swagger UI

This is how you can run swagger-ui to check and test your APIs
1. `$ docker pull swaggerapi/swagger-ui`
1. At the project root `$ docker run -p 80:8080 -e SWAGGER_JSON=/foo/swagger.yaml -v $(pwd)/api/swagger/:/foo swaggerapi/swagger-ui`
1. Go to `http://localhost`


