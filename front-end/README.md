# Formative 3.2 - Front End

In order to run the front end, the back end of the project is necessary. The back end needs to be running and connected to MongoDB, otherwise the front end will not function as expected.

:bangbang: **Please note our website isn't responsive and will look/work best on a desktop computer!** :bangbang:

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
3. Place "localhost" OR your ip into the SERVER_URL field
4. Place the port number you are running (typically either 3000 or 8888) in the SERVER_PORT field
4. Save file

Now you can run the link in your browser.

#### :full_moon: &nbsp; 04. Authentication

To access the pages where you can change details, you need to log in. Only users with login details can add, change or delete portfolio items.

Since this portfolio is for Rane and Mo's pieces, logging in is not intended to be accessible to everyone. However, for the sake of testing functionality and viewing all of our work on this website, we've kindly offered some instructions:

**How to log in:**<br>
It is a bit of an easter egg intended for the admins (Rane and Mo), but you must click on the small dot under the "MORA" title on the index page. Then the login modal will come up.

You will not have a login, but feel free to use this test dummy login:
* Username: user
* Password: pass

and you're set! :tada:

:bangbang: **Please do not delete our existing pieces!** :bangbang: <br>
If you want to test the deleting function, please ADD (+) a new piece first.
