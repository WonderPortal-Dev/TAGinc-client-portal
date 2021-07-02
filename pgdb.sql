DROP TABLE IF EXISTS requests;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id serial,
  first VARCHAR(25) NOT NULL,
  last VARCHAR(25) NOT NULL,
  email VARCHAR(254) NOT NULL,
  admin BOOLEAN DEFAULT FALSE,
  password VARCHAR(254) NOT NULL,
  last_login timestamp NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);
-- INSERT INTO Users (First, Last, Email, Password) VALUES ('Wunderpus', 'Photogenicus', 'wundurps@gmail.com', 'wpOctopus!');
/*
 one to many: user has many requests
*/
CREATE TABLE requests (
  id serial,
  user_id int NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL,
  "createdAt" DATE DEFAULT CURRENT_DATE,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
-- INSERT INTO requests (User_id, Title, Description, Status) VALUES (1, 2, 'Software ticket request', 'Bug in the application', 'Unassigned');
-- INSERT INTO requests (User_id, Title, Description, Status) VALUES (2, 1, 'Hardware ticket request', 'Need wire splicing kit', 'Completed');

CREATE TABLE services (
    id serial,
    type TEXT NOT NULL,
    PRIMARY KEY (id)
);

-- INSERT INTO services (Type) VALUES ();
-- DELETE FROM services WHERE type='Cyber Security';