# About (Written by Glanz)

A social media based on MERN Stacks. For the 8 Queens, Nature, Spirits, Divines, not for homo sapiens except me and my wife one day. 

# How to Setup

Open terminal and type:

```
wget https://nodejs.org/dist/v18.14.0/node-v18.14.0.tar.gz
```

extract and enter the directory and type:

```
./configure --prefix=/usr
sudo make
(or if you are root already)
make
```
(need Gcc 8.3.0 minimum)

Create a directory named MERN for example then open terminal there and type:

```
npx create-react-app moummenths
cd moummenths
npm start
```

This command opens the React project on the following URL: `localhost:3000`
(You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine)

## Setup MongoDB

* Local MongoDB
1. Install it from https://www.mongodb.com/try/download/community
2. Create .env file in root folder
3. Set MONGODB_URL=mongodb://localhost/<dbname>

* Atlas Cloud MongoDB
1. Create database at https://cloud.mongodb.com
2. Create .env file in root folder
3. Set MONGODB_URL=mongodb+srv://your-db-connection
        
## Run Backend / Server

```
cd backend
npm install
npm start
```

## Run Frontend

```
cd frontend
npm install
npm start
```
