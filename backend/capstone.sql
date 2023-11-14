\echo 'Delete and recreate capstone2 db?'
\prompt 'Return for yes and control-C to cancel'

DROP DATABASE capstone2;
CREATE DATABASE capstone2;

\connect capstone2

\i capstone2-schema.sql
\i capstone2-seed.sql
 
\echo 'Delete and recreate capstone_test db?'
\prompt 'return for yes or control-C to cancel'

DROP DATABASE capstone2_test;
CREATE DATABASE capstone2_test;
\connect capstone2_test;

\i capstone2-schema.sql