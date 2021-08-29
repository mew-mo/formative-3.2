# Formative 3.2 - Front End

In order to run the front end, the back end of the project is necessary. The back end needs to be running and connected to MongoDB, otherwise the front end will not function as expected.

## How to Run the Front End :dart:

#### :waxing_crescent_moon: &nbsp; 01. Clone
Ensure you are using MAMP, WAMP or XAMP to simulate the live server environment.<br>
Clone this project into your www (WAMP, XAMP) or htdocs (MAMP) folder. :open_file_folder:


``` console
git clone https://github.com/mew-mo/formative-3.2.git
```

#### :first_quarter_moon: &nbsp;	02. Install Packages
All of the dependencies are already available in the package.json. Navigate to the front end folder within the project, then install dependencies.
``` console
cd front-end/
npm i
```

#### :waxing_gibbous_moon: &nbsp; 03. Browser Access
To view the homepage, the link may differ depending on if you are running MAMP, WAMP or XAMP:

* https://localhost:3000
* https://localhost:8888 (for MAMP)

:round_pushpin: Note: The link may also have your ip number in the place of localhost.

To access:

1. Copy config0.json
2. Delete the "0" from the filename
3. Place https://localhost OR https://[your ip here] in the SERVER_URL field
4. Place the port number you are running (typically either 3000 or 8888) in the SERVER_PORT field
4. Save file

Now you can run the link in your browser.

#### :full_moon: &nbsp; 04. Authentication
:round_pushpin:	Only users with login details can add, change or delete portfolio items- you will need to register as a new user if you do not have a login.

:round_pushpin:	The database will not return any products if it is empty- in order to update, delete or view, you will need to add portfolio items.
