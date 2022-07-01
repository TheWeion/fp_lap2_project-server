# Habi-TraX - Server

> Habi-TraX is an easy to use app that will help you to track your daily habits and do them better! (Created for Lap 2 of our futureproof course)

## Installation & Usage

* The live website can be accessed: [HERE](https://fp-lap2-habit-tracker-server.herokuapp.com/)

### Installation

* Clone or download the repo.
* Run `npm install` to install dependencies.

### Usage

* Run `npm start` to launch server.
* Run `npm dev` to launch into dev environment.
* Run `npm seedDev` to seed Dev Database.
* Run `npm test` to launch test suite.
* Run `npm unitTest` to run Unit Tests.
* Run `npm coverage` to get test coverage.

## Changelog

### db/migrations/1_create_users.sql

- [x] Refactored Password for Cryptography.
- [x] Refactored timestamp to automatically generate timestamp on record creation.
- [x] Created Users table
- [x] Initial Commit

### db/migrations/2_create_habits.sql

- [x] Created Habits table
- [x] Initial Commit

### dbConfig/dev_seeds.sql

- [x] Updated seeds
- [x] Initial Commit

### controllers/users.js

- [x] Refactored Timestamp as this will happen directly within the SQL database.

- [x] Implemented user controller.

### controllers/habits.js

- [x] Refactored Show and Create functions.

- [x] Added UPDATE function.

- [x] Fixed DELETE implementation.

- [x] Implemented habits controller.

### models/habit.js

- [x] Fixed Create and Users function.

- [x] Added isComplete property.

- [x] Fixed DELETE implementation.

- [x] Implemented habit model.

### models/user.js

- [x] Fixed JOIN on getById method.

- [x] Linked ids with habit's model.

- [x] Implemented user model.

### routes/auth.js

- [x] Implemented Cryptography route.

### tests/integration/authRoutes.spec.js

- [x] Added authentication Tests.

### tests/unit/controllers/habits.spec.js

- [x] Refactored and fixed tests.

- [x] Initial Commit.

### tests/unit/controllers/users.spec.js

- [x] Refactored and fixed tests.

- [x] Initial Commit.

### tests/unit/models/Habit.spec.js

- [x] Refactored and fixed tests.

- [x] Initial Commit.

### tests/unit/models/User.spec.js

- [x] Refactored and fixed tests.

- [x] Initial Commit.

### index.js

- [x] Initial Commit - Setup Server initialisation

### server.js

- [x] Initial Commit - Setup Server configuration

### .env

- [x] Initial Commit

### dbConfig/init.js

- [x] Initial Commit
- [x] Setup DB initialisation

### dbConfig/seedDev.js

- [x] Initial Commit
- [x] Setup FS

### docker-compose.yaml

- [x] Initial Commit
- [x] Setup Docker Configuration

### docker-compose.dev.yaml

- [x] Initial Commit
- [x] Setup Docker Dev

### docker-compose.test.yaml

- [x] Initial Commit
- [x] Setup Docker Test

### package.json

- [x] Added Cryptography packages for password hashing.

- [x] Initial Commit

### .gitignore

- [x] Initial Commit

### .gitignore

- [x] Initial Commit

### Bugs
- 

## Wins & Challenges

### Wins

### Challenges

----
## Credits

>Crafted by Ben, Marie-Sophie, Samantha, and Terry.
