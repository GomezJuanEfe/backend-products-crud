# Backend products CRUD - API
Rest API backend with Express. This project is part of the Make It Real bootcamp. Built with:

- Node.js
- Express JS
- @makeitrealcamp/db-mock

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS, npm >= 9.5.x - Install with Volta.sh

## Express Router and Routes

| Route        | HTTP verb | Description          |
|--------------|-----------|-------------------------|
| /healthcheck | GET       | Return an ok            |
| /product     | POST      | Creates a new product   |
| /products    | GET       | Get list of products    |
| /product/:id | GET       | Get a single product    |
| /product/:id | PUT       | Update a single product |
| /product/:id | DELETE    | Remove a single product |

## Usage

The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create or read a product, here we have some examples.

### Create a **product** `/product`

Request Body:

```json
{
  "name": "Generic Steel Bike",
  "color": "Silver",
  "category": "Home",
  "price": "1200"
}
```

Response:

```json
{
  {
    "message": "Product created successfully!",
     "data": {
       "name": "Generic Steel Bike",
       "color": "Silver",
       "category": "Home",
       "price": "1200",
       "id": 3
     }
  }
}
```

### Read **products** `/products`

Response:

```json
{
  "message": "Products found successfully",
  "data": [
    {
        "name": "Generic Steel Bike",
        "color": "Silver",
        "category": "Home",
        "price": "1200",
        "id": 1
    }
  ]
}
```


### Developing

1. Clone the repository: `git clone git@github.com:GomezJuanEfe/backend-products-crud.git`

2. Run `npm install` to install server dependencies.

3. Configure the env running `cp .env.example .env`

4. Update `.env` with the required info

5. Run `npm run start` to start the development server.

### Deploying

This API is deployed on Render services. You can make requests on: 
https://backend-products-crud.onrender.com

## License

[MIT](LICENSE)

## Contributors

- [Juan Felipe Gómez](https://github.com/GomezJuanEfe)
- [Andry Peña](https://github.com/andrystylist)

