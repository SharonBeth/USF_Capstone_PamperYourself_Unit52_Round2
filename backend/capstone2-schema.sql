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
