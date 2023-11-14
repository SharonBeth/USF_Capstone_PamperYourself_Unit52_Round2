CREATE TABLE users (
    username VARCHAR(30) PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
        CHECK (position('@' IN email) > 1),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE videodata (
    id SERIAL,
    videoid TEXT PRIMARY KEY NOT NULL,
    title TEXT,
    link TEXT NOT NULL
);

CREATE TABLE evaluation (
    id SERIAL,
    username VARCHAR(30)
        REFERENCES users ON DELETE CASCADE, 
    video_id TEXT
        REFERENCES videodata ON DELETE CASCADE,
    watchit TEXT,
    category TEXT NOT NULL,
    time INTEGER,
    supplies TEXT,
    notes TEXT
);

CREATE TABLE nokeep (
    username VARCHAR(30)
        REFERENCES users ON DELETE CASCADE,
    nokeep_id TEXT
        REFERENCES videodata ON DELETE CASCADE,
    likeorhate TEXT NOT NULL
);

-- below are examples from Jobly. Change/erase when done.
-- CREATE TABLE companies (
--   handle VARCHAR(25) PRIMARY KEY CHECK (handle = lower(handle)),
--   name TEXT UNIQUE NOT NULL,
--   num_employees INTEGER CHECK (num_employees >= 0),
--   description TEXT NOT NULL,
--   logo_url TEXT
-- );

-- CREATE TABLE jobs (
--   id SERIAL PRIMARY KEY,
--   title TEXT NOT NULL,
--   salary INTEGER CHECK (salary >= 0),
--   equity NUMERIC CHECK (equity <= 1.0),
--   company_handle VARCHAR(25) NOT NULL
--     REFERENCES companies ON DELETE CASCADE
-- );

-- CREATE TABLE applications (
--   username VARCHAR(25)
--     REFERENCES users ON DELETE CASCADE,
--   job_id INTEGER
--     REFERENCES jobs ON DELETE CASCADE,
--   PRIMARY KEY (username, job_id)
-- );
