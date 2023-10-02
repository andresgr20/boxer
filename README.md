# boxer

# Run the app

1. Run the server first
   1. `cd server`
   2. `node index.js`
2. Run the client
   1. `cd client`
   2. `npm start`

# Instructions

Create
Use a POST call on `http://127.0.0.1:8000/api/order/`. The body needs to follow the JSON elements but there is no need to include an id nor created parameter in the body

Update

Use a PUT call on `http://127.0.0.1:8000/api/order/:id` and replace the id in the params. You need to pass the id only and the element that you would like to update

You can test the API using postman with x-www-form-urlencoded body.
