# About (Written by Glanz)

A social media based on MERN Stacks. For the 8 Queens, Nature, Spirits, Divines.
# How to Setup

## 1. Install NodeJS v-18.14 (February 2023 edition)
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

After finish compiling type:

```
sudo make install
(or)
make install
```

![Moummenths](https://github.com/glanzkaiser/Moummenths/blob/main/images/Moummenths-Node1.png)

## 2. Install React 
Create a directory named MERN for example then open terminal there and type:

```
npx create-react-app moummenths
cd moummenths
npm start
```

This command opens the React project on the following URL: `localhost:3000`
(You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine)

## 3. Setup MongoDB

* Local MongoDB
1. Install it from https://www.mongodb.com/try/download/community
2. Create .env file in root folder
3. Set MONGODB_URL=mongodb://localhost/<dbname>

* Atlas Cloud MongoDB
1. Create database at https://cloud.mongodb.com
2. Create .env file in root folder
3. Set MONGODB_URL=mongodb+srv://your-db-connection
        
        
## 4. Install Dependencies

You can use `npm` or `yarn` as package manager to download the necessary modules/packages.
It is recommended to install Yarn through the npm package manager, which comes bundled with Node.js when you install it on your system.
        
```
npm install --global yarn        
```
check it with `yarn --version`        

At the project folder / Moummenths type at terminal:

```
yarn
(or)
npm install
```

## 5. Run the application

```
npm run development 
(or) 
yarn development
```

Open localhost:3000 in the browser
