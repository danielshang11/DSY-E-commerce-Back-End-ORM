# DSY-E-commerce-Back-End-ORM

## Description

The Main purpose to build this application is to make a back-end for the E-commerce site. Taking a working Express.js API and configure it to use Sequelize to interact with a MySQL database. This application won't be able to be deployed, so the deploying video are attached as below and also in the ![video folder](https://github.com/danielshang11/DSY-E-commerce-Back-End-ORM/blob/main/assets/video).
This application will help users to search categories, products, and tags, also be able to search(GET), add(POST), update(PUT), and delete(DEL) each specific category, product, and tag.

## Usage
### the functionality of the application


### Video for each function
Clone the repo to local:
```
clone the repo to local machine
```
1. Open in MySQL Workbench and run
```
DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;
```
2. Update the env file(USER name and password) and change the file name
```
.env.EXAMPLE => .env
```
3. Open in Integrated Terminal and run
```
npm run seed
```
```
node index.js
```
4. Open in Insomnia and run localhost.
```
http://localhost:3001/api/(inside here could put products/categories/tags)/id(if needed)
```
#### Search function(GET, GET by id)

![Get for all table](./video/Get_for_all_tables.gif)
#### Functions(POST, PUT, DEL) for Categories

![Functions(POST, PUT, DEL) for Categories](./video/Categories.gif)

#### Functions(POST, PUT, DEL) for Products
![Functions(POST, PUT, DEL) for Products](./video/Products.gif)

#### Functions(POST, PUT, DEL) for Tags
![Functions(POST, PUT, DEL) for Tags](./video/Tags.gif)


## Credits

[Insomnia](https://insomnia.rest/download)

[MySQL Workbench](https://www.mysql.com/products/workbench/)

## License

None
