## **data-analysis-server**

* * *

Step 1: **Installation Required**

Node JS, Mongo DB

* * *

Step 2:  setup .env

Create new .env file in the root folder and copy and paste.env.example inside .env

* * *

Step 3: seed data into db using mongorestore ( data present in the backup folder for restore )

Test mongorestore install or not: **mongorestore --version**

seed command: mongorestore PATH\_REPO\_CLONE/backup/

eg. **mongorestore /home/raj/data-analysis-server/backup/**

* * *

Step 4: Open folder in your favourite editor ( download all dependencies )

**npm install**

* * *

Step 5: Start app

**npm start**

* * *