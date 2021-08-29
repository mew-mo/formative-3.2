# Formative 3.2 - Back End

In order to run the back end, the front end of the project is necessary. However, Postman will also work to test requests and responses.

## How to Run the Back End :dart:

#### :waxing_crescent_moon: &nbsp; 01. Clone

Ensure you are using MAMP, WAMP or XAMP to simulate the live server environment.<br>
Clone this project into your www (WAMP, XAMP) or htdocs (MAMP) folder. :open_file_folder:

``` console
git clone https://github.com/mew-mo/formative-3.2.git
```

#### :first_quarter_moon: &nbsp; 02. Install Packages
All of the dependencies are already available in the package.json. Navigate to the back end folder within the project, then install dependencies.
``` console
cd back-end/
npm i
```

#### :waxing_gibbous_moon: &nbsp; 03. MongoDB
For this project to function, you need a MongoDB account. This is so that you are able to parse your username, password and the Database cluster name into the URL- it cannot connect successfully without these.

https://cloud.mongodb.com/ :cloud:

Then:
1. Copy config0.json
2. Delete the "0" from the filename
3. Place your own username, password and clustername in the related empty fields
4. Save file

#### :full_moon: &nbsp; 04. Run Project
In order to run the project, you need nodemon to be installed. In order to install this globally:
``` console
npm i nodemon -g
```
Once you have nodemon, run this command within the back end folder:
``` console
nodemon index
```

If nodemon is successfully watching, the terminal will return the following lines (or similar ones- as long as the last two are present, it was successful)
``` console
[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index index.js`
Portfolio app is listening on port 3000
DB is connected
```

#### :waning_gibbous_moon: &nbsp; 05. Viewing Home
To view the homepage, the browser link will look like the following:

https://localhost:3000

OR it may have your ip # in the place of localhost.

#### :last_quarter_moon: &nbsp; 06. Endpoints
Here are the possible interactive endpoints available on the website.

Endpoint :seedling: | What it Does :herb: | Values :deciduous_tree: | Method :leaves: |
--- | --- | --- | --- |
/allItems | Shows all portfolio items from DB | N/A | GET |
/addItem | Adds a new portfolio item to the DB | N/A | POST |
/updateItem/:id | Updates the info of an existing portfolio item with corresponding ID | ItemId | PATCH |
/deleteItem/:id | Deletes an existing portfolio item with corresponding ID | ItemId | DELETE |
/registerUser | Creates a new user for the DB | N/A | POST |
/allUsers | Shows all current users in the DB | N/A | GET |
/updateUser/:id | Updates the details of an existing user with the corresponding ID | UserId | PATCH |
/deleteUser/:id | Deletes an existing user with the corresponding ID | UserId | DELETE |


#### :waning_crescent_moon: &nbsp; 07. MongoDB
To view data being posted, updated or deleted, navigate the following way in MongoDB:

cluster\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ collections\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ portfolio\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ items or users

:tada: You did it! :tada:
