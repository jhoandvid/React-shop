# React-shop

1. Clonar Proyecto
2. ```npm install```
2. ```npm run start```

## Dockerizar el proyecto 
```docker container run `
--name nest-app `
-w /app `
-p 80:3000 `
-v ${pwd}:/app `
node:18-alpine3.17 `
sh -c "npm install && npm run start"```

![image](https://user-images.githubusercontent.com/81529247/215230029-bd291ea2-f7ba-49a2-81e4-ac32da41e4d3.png)
