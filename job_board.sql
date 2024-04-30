\echo 'Delete and recreate job_board db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE job_board;
CREATE DATABASE job_board;
\connect job_board

\i schema.sql
\i seed.sql

\echo 'Delete and recreate job_board_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE job_board_test;
CREATE DATABASE job_board_test;
\connect job_board_test

\i schema.sql
