Steps to Install and Run App

1. Clone Project into directory.

2. Install NodeJS

a) Download NodeJS from https://nodejs.org/download/ .
b) Install nodejs by opening downloaded file.
c) Test Node -> In command prompt type node -v . You will get the version number.
d) Test NPM -> In command prompt type npm -v . You will get version number.

3. Navigate to folder of the Project and type
   npm install
   This will install all packages from package.json

4. Import mysql database from the Project.
   Change your mysql username and password in routes/index.js

You can also create your own tables . The application contains 3 tables.
Table 1 - id,username,password
Table 2 - id,user_id,name,name, description, width, length, height, weight,value
Table 3 - order_id, product_id, name, address, city, state, zip, number, quantity

5. Run node server.js

6. Navigate to localhost://8080 .

// ---- I have temporarily disabled this citing some issues -------------
7. In username type username.
   In password type password.

8. Now you have access to the app.