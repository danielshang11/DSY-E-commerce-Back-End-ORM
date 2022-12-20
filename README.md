# DSY-E-commerce-Back-End-ORM

## Description

The Main purpose to build this application is to make a back-end for the E-commerce site. Taking a working Express.js API and configure it to use Sequelize to interact with a MySQL database. This application won't be able to be deployed, so the deploying video are attached as below and also in the ![video folder](./assets/video/).
This application will help users to search categories, products, and tags, also be able to search(GET), add(POST), update(PUT), and delete(DEL) each specific category, product, and tag.

## Usage

### the functionality of the application

Clone the repo to local:
```
clone the repo to local machine
```

1. Open in MySQL Workbench and run
```
DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;
```

2. Open in Integrated Terminal and run
```
npm run seed
```

```
node index.js
```
3. Open in Insomnia and run localhost.
4. User is able to run the application

### Video for each function

#### Search function(GET, GET by id)

![alt text](./assets/video/Get_for_all_tables.gif)

### Functions(POST, PUT, DEL) for Categories
![alt text](./assets/video/Categories.gif)
### Functions(POST, PUT, DEL) for Products
![alt text](./assets/video/Products.gif)

### Functions(POST, PUT, DEL) for Tags
![alt text](./assets/video/Tags.gif)

## Credits

[Insomnia](https://insomnia.rest/download)

[MySQL Workbench](https://www.mysql.com/products/workbench/)

## License

None