-- DROP TABLE IF EXISTS location,devices_services,devices,deviceservices,baseservices,tickets,users,companies;
-- CREATE EXTENSION hstore;
-- DROP EXTENSION hstore;
-- ///////////////////////////////////////////////////////
-- HOLDS ALL POSSIBLE BASESERVICES
CREATE TABLE baseServices (
    id serial UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);
-- CREATE A BASE SERVICE  (ADMIN) LATER: add in query check for user_type 
-- INSERT INTO baseServices (Name, Description) VALUES ('Cloud Services', 'Some service description for cloud.');
-- INSERT INTO baseServices (Name, Description) VALUES ('Cybersecurity', 'Some service description for Cybersecurity.');
-- INSERT INTO baseServices (Name, Description) VALUES ('Managed IT Service', 'Some service description for Managed IT Service.');
-- INSERT INTO baseServices (Name, Description) VALUES ('Backup & Recovery', 'Some service description for Backup & Recovery.');
-- INSERT INTO baseServices (Name, Description) VALUES ('', '');
-- INSERT INTO baseServices (Name, Description) VALUES 
-- ('Cloud Services', 'Some service description for cloud.'),
-- ('Cybersecurity', 'Some service description for Cybersecurity.'),
-- ('Managed IT Service', 'Some service description for Managed IT Service.'),
-- ('Backup & Recovery', 'Some service description for Backup & Recovery.');

-- READ A BASE SERVICE    (ADMIN)
-- SELECT * FROM baseServices;
-- SELECT * FROM baseServices WHERE name='';


-- UPDATE A BASE SERVICE  (ADMIN)
-- UPDATE Baseservices SET description='new description' WHERE name='Cybersecurity';
-- UPDATE Baseservices SET description='' WHERE name='';

-- DELETE A BASE SERVICE  (ADMIN)
-- DELETE FROM Baseservices WHERE name='';

-- ///////////////////////////////////////////////////////
-- All Subscriptions
CREATE TABLE subscriptions (
  id serial NOT NULL,
  name TEXT NOT NULL UNIQUE,
  PRIMARY KEY (id)
);


-- CREATE subscription
-- INSERT INTO subscriptions (Name) VALUES ('Basic');
-- INSERT INTO subscriptions (Name) VALUES ('Mid Tier');
-- INSERT INTO subscriptions (Name) VALUES ('Premium');

-- INSERT INTO subscriptions (Name) VALUES 
-- ('Basic'),
-- ('Mid Tier'),
-- ('Premium');

-- GET subscriptions
-- SELECT * FROM Subscriptions;


-- UPDATE subscription
-- UPDATE Subscriptions SET name='' WHERE name='';


-- DELETE subscription
-- DELETE FROM Subscriptions WHERE name='';



-- ///////////////////////////////////////////////////////
-- All Subscriptions
CREATE TABLE baseServicesSubscriptions (
  id serial NOT NULL,
  baseService_id INT NOT NULL,
  subscription_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (baseService_id) REFERENCES baseServices(id) ON DELETE CASCADE,
  FOREIGN KEY (subscription_id) REFERENCES subscriptions(id) ON DELETE CASCADE
);

-- ADD RELATIONSHIPS BETWEEN BaseServices and Subscriptions
-- many subsctiptions can have many baseServices
-- INSERT INTO baseServicesSubscriptions (baseService_id, subscription_id) VALUES (#,#);
-- INSERT INTO baseServicesSubscriptions (baseService_id, subscription_id) VALUES 
-- (1,1),
-- (2,1),
-- (1,2),
-- (2,2),
-- (3,2),
-- (1,3),
-- (2,3),
-- (3,3),
-- (4,3);
-- Subscription      BaseServices
--     1        ->       1,2
--     2        ->       1,2,3
--     3        ->       1,2,3,4


-- GET the baseServices for a single subscription
-- SELECT baseServices.name, baseServices.description FROM baseServices JOIN baseServicesSubscriptions ON baseServicesSubscriptions.baseservice_id = baseServices.id WHERE baseServicesSubscriptions.subscription_id=2;

-- UPDATE- ONLY NEED TO DELETE A RELATIONSHIP IF NO LONGER APPLIES
-- DELETE FROM baseServicesSubscription WHERE (baseService_id=# AND subscription_id=#); 
-- if we dont know the id?
-- DELETE FROM baseServicesSubscription ...



-- ///////////////////////////////////////////////////////
-- HOLDS ALL COMPANIES
CREATE TABLE companies (
  id serial UNIQUE,
  name VARCHAR(50) NOT NULL,
  subscriptionLvl_id INT DEFAULT 1,
  PRIMARY KEY (id),
  FOREIGN KEY (subscriptionLvl_id) REFERENCES subscriptions(id)
);
-- CREATE COMPANY
-- INSERT INTO Companies (Name, SubscriptionLvl_id) VALUES ('CompanyA', 1);
-- INSERT INTO Companies (Name, SubscriptionLvl_id) VALUES ('CompanyB' , 2);
-- INSERT INTO Companies (Name, SubscriptionLvl_id) VALUES ('CompanyC', 1);

-- INSERT INTO Companies (Name, SubscriptionLvl_id) VALUES 
-- ('CompanyA', 1),
-- ('CompanyB' , 2),
-- ('CompanyC', 3);

-- GET COMPANY
-- SELECT * FROM Companies;
-- get companies with a specified subscription level
-- SELECT Companies.id, Companies.name FROM Companies JOIN subscriptions ON subscriptions.id = companies.subscriptionLvl_id WHERE subscriptions.id=3;

-- UPDATE COMPANY
-- UPDATE Companies SET name='New Company Name' WHERE name='old company name'; 

-- DELETE COMPANY
-- deleteing a company (deletes that company's users- CASCADE)
-- DELETE FROM Companies WHERE name='';
-- delete all companies
-- DELETE FROM Companies;




-- ///////////////////////////////////////////////////////
-- USER TABLE --
CREATE TABLE users (
  id serial UNIQUE,
  first VARCHAR(25) NOT NULL,
  last VARCHAR(25) NOT NULL,
  email VARCHAR(254) NOT NULL UNIQUE,
  isCompanyAdmin BOOLEAN DEFAULT FALSE,
  companyID INT,
  -- devices INT [], -- STARTS NULL, ADMIN / USER ADMIN CAN ADD DEVICE
  -- deviceServices INT [], -- POPULATED BASED ON DEVICES USER HAS ADDED TO THEIR LIST (PIGGYBACK THIS QUERY OFF OF DEVICES QUERY)
  -- baseServices INT [], --  REPETITIVE- Query OFF COMPANYID!
  admin BOOLEAN DEFAULT FALSE,
  password VARCHAR(254) NOT NULL, -- needed?
  last_login timestamp NOT NULL DEFAULT NOW(), -- needed?
  PRIMARY KEY (id),
  FOREIGN KEY (companyID) REFERENCES companies(id) ON DELETE CASCADE
);
-- -----------------CREATE USER----------------------------------------------------------------------------------------------------
-- INSERT INTO Users (First, Last, Email, CompanyID, Password) VALUES ('Wunderpus', 'Photogenicus', 'wundurps@gmail.com', 1, 'wpOctopus!');
-- INSERT INTO Users (First, Last, Email, CompanyID, Password) VALUES ('Wonder', 'Woman', 'www@gmail.com', 2, 'wwSavesTheWorld!');
-- INSERT INTO Users (First, Last, Email, CompanyID, Password) VALUES ('Iron', 'Man', 'im@gmail.com', 2, 'iluvu3000!');
-- INSERT INTO Users (First, Last, Email, CompanyID, Password) VALUES ('', '', '', #, '');
-- INSERT INTO Users (First, Last, Email, CompanyID, Password) VALUES 
-- ('Mango', 'Yellow', 'my@gmail.com', 3, 'dfdsnflsdknf!'),
-- ('Water', 'Melon', 'wdfdsfw@gmail.com', 3, 'vlkdvnng!'),
-- ('Pink', 'Slip', 'pksls@gmail.com', 2, 'knfbnxcj!');

-- ----------------READ USER------------------------
-- SELECT * FROM Users;
-- get all users from a specified company
-- SELECT * FROM Users WHERE companyid=#;
-- read a users subscription level
-- SELECT subscriptions.name FROM subscriptions JOIN Companies ON Companies.SubscriptionLvl_id=subscriptions.id JOIN Users ON Companies.id=Users.id WHERE Users.id=1;

-- ---------------UPDATE USER------------------------------------------------------------------------------
-- can update: first, last, email, isCompanyAdmin, companyID, companySubscription, admin, token
-- UPDATE Users SET email='newemail@gmail.com' WHERE (first='Iron' AND last='Man' AND companyID=2);
-- UPDATE Users SET isCompanyAdmin=TRUE WHERE (first='Iron' AND last='Man' AND companyID=2);

-- ---------------DELETE USER----------------------------------------------------------------------------------------------
-- When deleting a user, we delete the user's tickets (CASCADE) / LATER: reassign the open-tickets UserAdmin / closed-tickets ADMIN under a passedDownTickets field?
-- DELETE FROM Users WHERE (first='Iron' AND last='Man' AND companyID=2);




-- --------------ADD DEVICE for a user---------------------
-- const data = SELECT unnest(devices) FROM Users WHERE users.id=#;
    -- query returns list of rows. Add onto list
    -- const updatedData = data + newData;
    -- UPDATE Users SET devices=updatedData WHERE (devices=data AND users.id=#);

-- ---------------GET DEVICES for a user-------------------
-- SELECT devices.type, devices.name, devices.description FROM Devices WHERE users.id=#;

-- ------------UPDATE DEVICE for a user--------------------
-- 

-- ------------DELETE DEVICE for a user-----------------------
-- 






-- -----------------------CREATE DEVICE SERVICE for a user------------------------
-- 

-- -----------------------GET DEVICE SERVICE for a user--------------------------
-- get device services for a user based on device_type
-- SELECT deviceServices.name, deviceServices.description FROM deviceServices 
-- JOIN Device ON 

-- -----------------------UPDATE DEVICE SERVICE for a user------------------------
-- 

-- -----------------------DELETE DEVICE SERVICE for a user------------------------
-- 






-- -----------------------CREATE BASE SERVICE for a user--------------------------
-- const data = SELECT unnest(baseServices) FROM Users WHERE users.id=#;
    -- query returns list of rows. Add onto list
    -- const updatedData = data + newData;
    -- UPDATE Users SET baseServices=updatedData WHERE (baseServices=data AND users.id=#);


-- -----------------------GET BASE SERVICES for a user-----------------------------
-- view base services depending on user's company's subscription
-- SELECT baseServices.name, baseServices.description FROM baseServices JOIN Users ON WHERE 


-- -----------------------UPDATE BASE SERVICES for a user---------------------------
-- should be updated if those base services are no longer available for a user's company : Set up CASCADE


-- -----------------------DELETE BASE SERVICES for a user---------------------------
-- should be deleted if those base services are no longer available for a user's company : Set up CASCADE





-- get users under a specified subscription level
-- SELECT users.companyID, users.id, users.first, users.last, users.email, users.devices, users.deviceServices, users.baseServices
-- FROM Users
-- JOIN Companies ON Companies.id = users.companyID
-- JOIN Subscriptions ON subscriptions.id = Companies.subscriptionLvl_id
-- WHERE subscriptions.id=3; 


-- ///////////////////////////////////////////////////////
-- HOLDS ALL DEVICE SERVICES
CREATE TABLE deviceServices (
    id serial UNIQUE,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id)
);
-- Each device could have one or many services

-- 1 Repair battery
-- 2 Repair screen
-- 3 Trouble shoot
-- 4 Back up information

-- CREATE A DEVICE SERVICE (ADMIN)
-- INSERT INTO DeviceServices (Name, Description) VALUES ('Repair battery', 'Repair battery Description');
-- INSERT INTO DeviceServices (Name, Description) VALUES ('Repair screen', 'Repair screen Description');
-- INSERT INTO DeviceServices (Name, Description) VALUES ('Trouble shoot', 'Trouble shoot Description');
-- INSERT INTO DeviceServices (Name, Description) VALUES ('Back up information', 'Back up information Description');
-- INSERT INTO DeviceServices (Name, Description) VALUES 
-- ('Repair battery', 'Repair battery Description'),
-- ('Repair screen', 'Repair screen Description'),
-- ('Trouble shoot', 'Trouble shoot Description'),
-- ('Back up information', 'Back up information Description');


-- READ A DEVICE SERVICE   (ADMIN)
-- SELECT * FROM deviceServices;


-- UPDATE A DEVICE SERVICE (ADMIN)
-- UPDATE deviceServices SET description='' WHERE name='';

-- DELETE A DEVICE SERVICE (ADMIN)
-- DELETE FROM deviceServices WHERE name='';


-- ///////////////////////////////////////////////////////
-- HOLDS ALL DEVICES
CREATE TABLE devices (
  id serial UNIQUE,
  company_id INT,
  usr_id INT, -- Should default to company user admin?
  type TEXT NOT NULL,
  name TEXT NOT NULL,
  description JSON NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
  FOREIGN KEY (usr_id) REFERENCES users(id)
);
-- LATER: Table for possible device types; Separate table with individual devices listing: device id (differs per unique physical device), storage, etc (?)
-- Desktop
-- Laptop 
-- Router
-- Switch
-- Hub

-- CREATE A DEVICE (SHOULD ONLY BE DONE BY: COMPANY - USER ADMIN / ALL - ADMIN)
-- INSERT INTO Devices (company_id, Type, Name, Description) VALUES (1, 'Desktop', 'TagInc Desktop 1', '{"Storage": "256 GB"}');
-- INSERT INTO Devices (company_id, Type, Name, Description) VALUES 
-- (2, 'Desktop', 'CompanyB Desktop 1', '{"Storage": "256 GB"}, {"RAM": "16 GB"}');

-- READ DEVICES FOR /USER SPECIFIC - (USER / COMPANY SPECIFIC - USER ADMIN / ALL NON-SPECIFIC OR SPECIFIC - ADMIN)

-- UPDATE DEVICE (SHOULD ONLY BE DONE BY: COMPANY - USER ADMIN / ALL - ADMIN)

-- DELETE DEVICE (SHOULD ONLY BE DONE BY: COMPANY - USER ADMIN / ALL - ADMIN)


-- ///////////////////////////////////////////////////////
/*
 many to many: many devices have many deviceServices
*/
-- mapping devices to their allowed respective device_services
CREATE TABLE devices_services (
  id serial UNIQUE,
  device_id INT,
  service_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (device_id) REFERENCES devices(id) ON DELETE CASCADE,
  FOREIGN KEY (service_id) REFERENCES deviceServices(id) ON DELETE CASCADE
);

-- CREATE A device_service association
-- INSERT INTO device_services (device_id, service_id) VALUES (#, #);

-- READ
-- read the device_services available based on the device you have
-- SELECT * FROM deviceServices WHERE devices_services.device_id=${someid#}

-- UPDATE 
-- should only have to either delete, add or just access

-- DELETE
-- CASCADES
-- delete a relationship
-- DELETE FROM device_services WHERE (device_id=# AND service_id=#);


-- ///////////////////////////////////////////////////////
/*
 one to many: one user has many tickets
*/
CREATE TABLE tickets (
  id serial UNIQUE,
  user_id INT NOT NULL,
  type TEXT NOT NULL,
  details JSON, 
  status TEXT NOT NULL DEFAULT 'Open', -- open, pending, closed
  "createdAt" DATE DEFAULT CURRENT_DATE,
  comments JSON, -- WE'LL WANT TO INSERT A NEW ITEM INTO COMMENTS UPON EACH UPDATE/EDIT/REVISION TO TICKET (CHAT)
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- INSERT INTO Tickets (User_id, Type) VALUES (1, 'Help');

-- CREATE TABLE tickets_details (
--   id serial UNIQUE,
--   ticket_id INT NOT NULL,
--   details TEXT NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE
-- );
-- query for a specific ticket's details
-- SELECT tickets_details.details FROM tickets_details JOIN tickets ON tickets_details.ticket_id=tickets.id WHERE tickets.id=#;



-- CREATE TABLE tickets_comments (
--   id serial UNIQUE,
--   ticket_id INT NOT NULL,
--   comment TEXT NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE
-- );
-- SELECT tickets_comments.comments FROM tickets_comments JOIN tickets ON tickets_comments.ticket_id=tickets.id WHERE tickets.id=#;


-- NEED A QUERY TO INSERT INTO THE COMMENTS



-- ///////////////////////////////////////////////////////
-- HOLDS ALL LOCATIONS
CREATE TABLE locations (
  id serial UNIQUE,
  company_id INT NOT NULL,
  streetAddress TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zipCode TEXT NOT NULL, 
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- INSERT INTO Locations (StreetAddress, City, State, ZipCode) VALUES ('1234 Elf St', 'Los Angeles', 'California', '90210');
-- INSERT INTO Locations (StreetAddress, City, State, ZipCode) VALUES ('1234 Elf St', 'Los Angeles', 'California', '90210');
-- INSERT INTO Locations (StreetAddress, City, State, ZipCode) VALUES ('1234 Elf St', 'Los Angeles', 'California', '90210');



-- ///////////////////////////////////////////////////////
-- -- MAIN ADMIN NEEDS --
--     companies -- all in the database - CRUD
--     services -- all in the database - CRUD
--     tickets -- all in the database - CRUD
--         companyId    |
--         userId       |         CRUD ANY OF THESE
--         isPending    |
--         details      |

-- -- USER ADMIN NEEDS
--    view all users in company     - CRUD
--    view all services in company  - CRUD
--    view all tickets in company   - CRUD
--    request new user to be made   - CRUD

