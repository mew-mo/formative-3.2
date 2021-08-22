# Formative 3.2 - Back End

In order to run the back end, the front end of the project is necessary. However, Postman will also work to test requests and responses.

## How to Run the Back End

#### 01. Clone
Ensure you are using MAMP, WAMP or XAMP to simulate the live server environment. Clone this project into your www (WAMP, XAMP) or htdocs (MAMP) folder.

``` console
git clone https://github.com/mew-mo/formative-3.2.git
```

#### 02. Install Packages
All of the dependencies are already available in the package.json. Navigate to the back end folder within the project, then install dependencies.
``` console
cd back-end/
npm i
```

#### 03. MongoDB
For this project to function, you need a MongoDB account. This is so that you are able to parse your username, password and the Database cluster name into the URL- it cannot connect successfully without these.

https://cloud.mongodb.com/

Then:
1. Copy config0.json
2. Delete the "0" from the filename
3. Place your own username, password and clustername in the related empty fields
4. Save file

#### 04. Run Project
In order to run the project, you need nodemon to be installed. In order to install this globally:
``` console
npm i nodemon -g
```
Once you have nodemon, run this command within the back end folder:
``` console
nodemon index
```

#### 05. Viewing Home
To view the homepage, the browser link will look like the following:

localhost:3000

OR it may have your ip # in the place of localhost.

#### 06. Endpoints
Here are the possible interactive endpoints available on the website.

Endpoint | What it Does | Values | Method |
--- | --- | --- | --- |
/allItems | Shows all portfolio items from DB | N/A | GET |
/addItem | Adds a new portfolio item to the DB | N/A | POST |
/updateItem/:id | Updates the info of an existing portfolio item with corresponding ID | ObjectId | PATCH |
/deleteItem/:id | Deletes an existing portfolio item with corresponding ID | ObjectId | DELETE |

#### 07. MongoDB
To view data being posted, updated or deleted, navigate the following way in MongoDB: 

cluster\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ collections\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ portfolio\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ items or users
