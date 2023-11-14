1. Ran into errors:

Delete and recreate capstone db?

invalid variable name: "Return for yes and control-C to cancel"
DROP DATABASE
CREATE DATABASE
You are now connected to database "capstone2" as user "sharonfahler".
CREATE TABLE
psql:capstone2-schema.sql:14: ERROR:  multiple primary keys for table "videodata" are not allowed
LINE 3:     videoid TEXT PRIMARY KEY,
                         ^
psql:capstone2-schema.sql:25: ERROR:  syntax error at or near "video_id"
LINE 3:     video_id TEXT
            ^
psql:capstone2-schema.sql:31: ERROR:  relation "videodata" does not exist
INSERT 0 2
psql:capstone2-seed.sql:20: ERROR:  relation "videodata" does not exist
LINE 1: INSERT INTO videodata (id, title, link)

1a. Resolution attempts: removed the 2nd primary key form videodata table, capstone2 db. Also, found a few missing commas. Added those and reran it with:
    psql<capstone.sql in ubuntu (not in postgresql app)

2. Next run of errors:

invalid variable name: "Return for yes and control-C to cancel"
DROP DATABASE
CREATE DATABASE
You are now connected to database "capstone2" as user "sharonfahler".
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
INSERT 0 2
psql:capstone2-seed.sql:20: ERROR:  null value in column "videoid" of relation "videodata" violates not-null constraint
DETAIL:  Failing row contains (-uc-PvM2cVs, null, Cali&#39;s Summer Night Skin Care Routine!, https://www.youtube.com/embed/-uc-PvM2cVs).
Delete and recreate capstone_test db?

2a. I believe the error is saying that becuase the 'evaluation' table is relying on 'videodata' table/videoid column, the 'videodata' table/'videoid' column needs to be NOT NULL. Made these changes and reran.

3. Next run:
   
   invalid variable name: "Return for yes and control-C to cancel"
DROP DATABASE
CREATE DATABASE
You are now connected to database "capstone2" as user "sharonfahler".
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
INSERT 0 2
psql:capstone2-seed.sql:20: ERROR:  null value in column "videoid" of relation "videodata" violates not-null constraint
DETAIL:  Failing row contains (-uc-PvM2cVs, null, Cali&#39;s Summer Night Skin Care Routine!, https://www.youtube.com/embed/-uc-PvM2cVs).
Delete and recreate capstone_test db?

3a. I forgot that the data seeding the file needs to be restructured. This will be reset and then reran. Also, for future reference, if there is a SERIAL column in a table, that column name does not need to be called when seeding a database, since SERIAL means it will do it itself. Also, in the database/table setup, if you use SERIAL, it is implied that it is an integer, and you do not need to put integer: See below

psql:capstone2-schema.sql:14: ERROR:  syntax error at or near "SERIAL"
LINE 2:     id INTEGER SERIAL,
                       ^
psql:capstone2-schema.sql:25: ERROR:  syntax error at or near "SERIAL"
LINE 2:     id INTEGER SERIAL,
                       ^

4. Several small, typos. Then, ran again and got this message:
   
   t routes/Video_eval(This was later changed for simplicity)
eval_id in ideo_eval (This was late rchanged for simplicity, but in this doc, it is just a tool to understand what I did, so I decided not to change all the titles.) at the
error: column "video_id" of relation "evaluation" does not exist
    at /home/sharonfahler/usf/Unit-52_Capstone_Pamper-Yourself/capstone_52_pamper-yourself/backend/node_modules/pg/lib/client.js:526:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Video_eval.video_evalPost (/home/sharonfahler/usf/Unit-52_Capstone_Pamper-Yourself/capstone_52_pamper-yourself/backend/models/video_eval.js:13:24)
    at async /home/sharonfahler/usf/Unit-52_Capstone_Pamper-Yourself/capstone_52_pamper-yourself/backend/routes/video_eval.js:21:21
POST /video_eval/ 500 98 - 125.111 ms

    4a. I think it is saying that because this table is relying on another table to be referenced, and I don't have that ohter table (videodata-table, videoid-column reference & required with NOT NULL) that this is why I can't move forward with the code.

    I am trying to adapt the function to call to videodata first to see that I can at least make the call.
5.Realized that I was calling to the wrong capstone-database because i was having trouble with the first one. So I switched and reran it. Hereis hte newest error:

At routes/video_eval
eval_id in Video_eval at the
error: column "video_id" does not exist
    at /home/sharonfahler/usf/Unit-52_Capstone_Pamper-Yourself/capstone_52_pamper-yourself/backend/node_modules/pg/lib/client.js:526:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Video_eval.video_evalPost (/home/sharonfahler/usf/Unit-52_Capstone_Pamper-Yourself/capstone_52_pamper-yourself/backend/models/video_eval.js:12:24)
    at async /home/sharonfahler/usf/Unit-52_Capstone_Pamper-Yourself/capstone_52_pamper-yourself/backend/routes/video_eval.js:21:21
POST /video_eval/ 500 71 - 47.435 ms

5a. Found typos in the Backend/model-class at video_eval. With all the changes from one table to the other, i forgot to change both spots in teh syntax to call to the database.

6. Was able to make the code get past the database entry. I confirmed that that data went through based on the console.log that appeared in the error string & also confirmed with a straight call through Ubuntu/psql (SELECT * FROM videodata;) However, I am still getting an error:
   
   At routes/video_eval
eval_id in Video_eval at the
after database entry
TypeError: res.status is not a function
    at /home/sharonfahler/usf/Unit-52_Capstone_Pamper-Yourself/capstone_52_pamper-yourself/backend/routes/video_eval.js:22:20
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
POST /video_eval/ 500 65 - 2560.428 ms

6a. 


